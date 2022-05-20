
import { createStore } from "redux";
//While using or creating store by createStore hook we need to pass a function as createStore function is a higher order function that takes -----reducer function-----
import reducerFn from "./Reducer";

const store = createStore(reducerFn);

export default store;