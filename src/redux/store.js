import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";
// logger is just a () that has to be inside an array. Its an array bcoz we might need to add more stuff inside it(custom), and can just pass the array.
const middlewares = [logger];

// applyMiddleware is a () that will take some agrs, these args are taken from the logger and spreaded it so each element can be used as a seprate argument.
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;