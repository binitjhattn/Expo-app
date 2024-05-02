import { IS_LOGGED_IN } from "../actionTypes/actionTypes";

export const handleIsLoggedIn = (val) => {
  return {
    type: IS_LOGGED_IN,
    payload: val,
  };
};
