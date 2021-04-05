//https://lgphone.tistory.com/15?category=911601
import { createAction, ActionType  } from 'typesafe-actions';
import { Time } from "../reducers/initialState";

// export interface Action {
//   type: string,
//   payload: object
// }

export const CHANGE_ENDTIME = "CHANGE_ENDTIME";
export const changeEndTime = createAction(CHANGE_ENDTIME)<Time>();

const actions = {changeEndTime};

export type TimeAction = 
  | ActionType<typeof actions>;