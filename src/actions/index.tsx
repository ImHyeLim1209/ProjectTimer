import { Time } from "../reducers/initialState";
export const CHANGE_ENDTIME = "CHANGE_ENDTIME" as const; //action.type이 string이 아니라 "CHANGE_ENDTIME"으로 추론됨

export interface action {
  type: string,
  payload: object
}

export const changeEndTime = (time: Time) : action => {
  return {
    type: CHANGE_ENDTIME,
    payload: time
  }
}

type TimeAction =
  | ReturnType<typeof changeEndTime>;