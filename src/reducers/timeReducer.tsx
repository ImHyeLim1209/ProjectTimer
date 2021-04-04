import { CHANGE_ENDTIME, action } from "../actions/index";
import { initialState } from "./initialState";

const timeReducer = (state = initialState, action: action) => {
  switch(action.type) {
    case CHANGE_ENDTIME:
      return {
        "endtime": action.payload
      };
    default:
      return state;
  }

}

export default timeReducer;