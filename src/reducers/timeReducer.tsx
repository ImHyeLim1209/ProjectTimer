import { CHANGE_ENDTIME, TimeAction } from "../actions/index";
import { initialTimeState, timeState } from "./initialState";
import { createReducer } from 'typesafe-actions';

const timeReducer = createReducer<timeState, TimeAction>(initialTimeState, {
  [CHANGE_ENDTIME]: (state, action) => {
    return Object.assign({}, state, {
      "endtime": action.payload
    })
  },
})

export default timeReducer;