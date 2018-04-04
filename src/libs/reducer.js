import { LOCATION_CHANGE } from "../libs/constants/constantsRouter";

const initialState ={
    pathname:'/',
    search:'',
    hash:'',
};
export const routerReducer =(state= initialState, action)=>{
    switch(action.type){
        case LOCATION_CHANGE:
        return{
            ...state,
            ...action.payload,
        }
        default:
          return state;
    }
};