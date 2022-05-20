import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import store from './store/Store';
//Instead of using  or hardcoing the action type we can use other way around
import * as ActionTypes from  './store/ActionTypes';

function App() {
  //to access the state value we need to use ----useSelector hook----
  const counter = useSelector((state)=>state.counter);

  //to change ,update the state value we need to use dispatch 
  const dispatch = useDispatch();

  const incrementValue = ()=>{
    //through dispatch function we pass the type/nature of the action or operation 
     dispatch({type:ActionTypes.Increment_Value});
     
     console.log("When getStore increment");
     //if you want to see immediate change or update in the state then you need to use ------getState()----or else if you doesnot use it and print state you will get previous state 
    //  This is beacause app doesnot get chance to rerender so it shows previous state and if we use getState then we wil get updated 
     console.log(store.getState());
    // console.log(counter);
  }

  const decrementValue = ()=>{
    //through dispatch function we pass the type/nature of the action or operation 
     dispatch({type:ActionTypes.Decrement_Value});
     console.log("When getStore decrement ");
     console.log(store.getState());
  }
  return (

    <div className="App">
       <h1>Counter App</h1>
       <h2>Counter Value: {counter}</h2>
       <button className="btn btn-primary" onClick={incrementValue}>Increase Value</button>
       <button disabled={(!counter>0)?true:false} className="btn btn-primary" onClick={decrementValue}>Decrease Value</button>
    </div>
  );
}

export default App;
