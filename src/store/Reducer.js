//Instead of using  or hardcoing the action type we can use other way around
import * as ActionTypes from  './ActionTypes';
//creating a reducer i.e. a function that takes states of store and update it and then returns the updated store
//reducer function should be a pure function
//should be a synchronous function
//reducer must not mutate the original object

const reducerFn = (state = {counter:0},action)=>{
   if(action.type===ActionTypes.Increment_Value){
       return {
        ...state,
        counter : state.counter + 1
    }
   }
   
   if(action.type===ActionTypes.Decrement_Value){
    return {
        ...state,
        counter : state.counter - 1
    }
   }
   return state;
}

export default reducerFn;
