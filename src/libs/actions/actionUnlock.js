import {REQUEST_SEARCH, RECEIVE_RESPONSE, REQUEST_UNLOCK} from '../constants/constantUnlock'; 

export const requestSearch = (username)=>({
    type: REQUEST_SEARCH,
    username
})
export const receiveSearch = (username, json)=>(
  {
  
    type: RECEIVE_RESPONSE,
    username,
    data: json.d,
})
export const requestUnlock =(username)=>({
  type:REQUEST_UNLOCK,
  username
})


export const fetchSearch = username => dispatch => {
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
        .then((json) =>{ dispatch(receiveSearch(username,json)),console.log(json)})
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
        .then((json)=>{dispatch(receiveResponseUnlock(username, json)),console.log(json)})
}

export const receiveResponseUnlock= (username, json)=> dispatch =>{
   console.log(username, json.d.HasError);
   if (json.d.HasError){
     return;
   }
   else
   dispatch(fetchRequestSearch(username))
}


