import { UserActionTypes } from "./userTypes";
// Setting an initial state (like we use to declare in useState())
const INITIAL_STATE = {
    currentUser : null
};

// setting state as default paramater, if none is send.
const userReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case UserActionTypes.SET_CURRENT_USER:
            // spreading all the prevValue of state and then modifying the one we need to. 
            return {
                ...state,
                currentUser : action.payload
            }
        default:
            return state;
    }
}
export default userReducer;
