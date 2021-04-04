import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Time} from '../reducers/initialState';
import {changeEndTime} from '../actions/index'
import {RootState} from '../reducers/index'

const Calendar: React.FC = () => {
  const state = useSelector((state:RootState) => state.timeReducer);
  const {endtime} = state;
  const dispatch = useDispatch();

  const calendarHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeEndTime(new Time(e.target.value)));
  }
  return (
    <input type="date" id="end" name="project-end" value={endtime["timeStr"]} onChange={calendarHandler}/>
  )
}

export default Calendar;