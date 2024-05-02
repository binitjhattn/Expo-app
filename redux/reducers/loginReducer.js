// reducer.js
import { IS_LOGGED_IN } from "../actionTypes/actionTypes";

const initialState = {
  isLoggedIn: true,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGED_IN:
      return {...state, isLoggedIn: action.payload};

    default:
      return state;
  }
};

export default loginReducer;
