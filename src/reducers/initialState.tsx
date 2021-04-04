export class Time {
  private timeStr: string = '2021-04-26'; //input date를 통해 사용자가 변경시킬 수 있는 부분

  constructor(timeStr: any) {
    this.timeStr = timeStr || '2021-04-26'; //초기값
  }

  getTimeStr = () : string => {
    return this.timeStr;
  }

  getDateObject = () : Date => {
    return new Date(this.timeStr+"T12:00:00"); //날짜를 정하면 12시 기준
  }

  setTimeStr = (timeStr: string) :void => {
    this.timeStr = timeStr;
  }
}


export const initialState =
{
  "endtime": new Time('2021-04-26')
};