import {REQUEST_SEARCH, RECEIVE_RESPONSE,DISMISS_ALERT} from '../constants/constantUnlock';

const initialState = {
    unlockAcountSearch: {},
}

 
export const resultSearchUnlock =(state= initialState.unlockAcountSearch,action)=>{
    switch(action.type){
        case RECEIVE_RESPONSE:
        return{
            ...state,
            username: action.username,
            data: action.data,
            message:action.message,
            error:action.hasError,
            visible: action.isOpen
        }
        case DISMISS_ALERT:
        return {
            ...state,
            visible: action.isOpen,
        }
        default:
        return state;
    }
}

