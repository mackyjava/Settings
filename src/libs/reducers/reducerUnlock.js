import {REQUEST_SEARCH, RECEIVE_RESPONSE} from '../constants/constantUnlock';

const initialState = {
    unlockAcountSearch: {},
}

 
export const resultSearchUnlock =(state= initialState.unlockAcountSearch,action)=>{
    switch(action.type){
        case RECEIVE_RESPONSE:
        return{
            ...state,
            username: action.username,
            data: action.data
        };
        default:
        return state;
    }
}

