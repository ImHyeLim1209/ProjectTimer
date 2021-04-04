import React, {useState, useEffect} from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import './scss/Timer.scss';

const convertSecToHourString = (targetSec: number): string => {
  const hour = Math.ceil(targetSec / 3600);
  const min = Math.ceil(targetSec%3600/60);
  const sec = Math.ceil(targetSec%3600%60);
  
  return `${hour}:${min}:${sec}`;
}

const getRestTime = (endtime: Date) : string => {
  const today = new Date();
  const dateDiff = Math.ceil((endtime.getTime()-today.getTime())/ 1000);

  return convertSecToHourString(dateDiff);
}

const Timer: React.FC = () => {
  const state = useSelector((state:RootStateOrAny) => state.timeReducer);
  const {endtime} = state;
  const [restTime, setRestTime] = useState(getRestTime(endtime.getDateObject()));

  useEffect(() => {
    const countdown = setInterval(() => {
      setRestTime(getRestTime(endtime.getDateObject()));
    }, 1000);
    return () => clearInterval(countdown);
  }, [restTime, endtime]); //endtime 안 넣으면 경고메시지 발생: React Hook useEffect has a missing depenency...

  return <div className="timer">{restTime}</div>
}

export default Timer;