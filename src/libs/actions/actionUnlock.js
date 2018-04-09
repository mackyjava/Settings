import {REQUEST_SEARCH, RECEIVE_RESPONSE, REQUEST_UNLOCK, DISMISS_ALERT, EMPTY_DATA_SEARCH} from '../constants/constantUnlock'; 

export const requestSearch = (username)=>({
    type: REQUEST_SEARCH,
    username
})
export const receiveSearch = (username, json)=>(
  {
    type: RECEIVE_RESPONSE,
    username,
    data: json.d.Data,
    message: json.d.Message,
    hasError: json.d.HasError,
    isOpen: true,
})
export const requestUnlock =(username)=>({
  type:REQUEST_UNLOCK,
  username
})
export const emptyData =()=>({
  type:EMPTY_DATA_SEARCH,
  username: "",
  data:"",
  message: null,
  hasError:'',
  isOpen:"",
})

export const fetchSearch = (username, messageUnlock, error) => dispatch => {
    dispatch(requestSearch(username))
      return  fetch('/Security/UnlockingAccount.aspx/SearchUserByNameUser', {
        method: "post",
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, //make sure to serialize your JSON body
          body: JSON.stringify({username:username})
        })
        .then(res => res.json())
        .then((json) =>{
          if((messageUnlock !== undefined && messageUnlock !== '')&&(error!== undefined && error !== '')){ 
             json.d.Message = messageUnlock; 
             json.d.HasError = error;  
             dispatch(receiveSearch(username,json))
          }
          dispatch(receiveSearch(username,json))
          
       })
}

export const fetchRequestSearch = username=>(dispatch, getState) => {
 return  dispatch(fetchSearch(username))
}

export const fetchRequestUnlock = username =>(dispatch, getState) => {
  return dispatch(fetchUnlock(username))
}
export const fetchUnlock = username => dispatch =>{
  dispatch(requestUnlock(username))
     return fetch('/Security/UnlockingAccount.aspx/UnlockingUser', {
        method:'POST',
        credentials: 'same-origin',
        headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
        },//make sure to serialize your JSON body
        body: JSON.stringify({ username:username })
        })
        .then(res => res.json())
        .then((json)=>{dispatch(receiveResponseUnlock(username, json))})
}

export const receiveResponseUnlock= (username, json)=> dispatch =>{
  let messageUnlock
  let error
  if(json.d.HasError){
    error = true;
    messageUnlock= 'An error has occurred'
    dispatch(fetchSearch(username,messageUnlock,error))
  }
  else{
    error =false;
    messageUnlock= 'Success'
    dispatch(fetchSearch(username,messageUnlock, error))
  }
  
}
export const dismissAlert = (value)=>({
  type:DISMISS_ALERT,
  isOpen:value,

})


