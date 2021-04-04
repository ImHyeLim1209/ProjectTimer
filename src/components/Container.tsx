import React, {useEffect} from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import Timer from './Timer';
import Detail from './Detail'
import './scss/Container.scss';

const Container: React.FC = () => {
  const state = useSelector((state:RootStateOrAny) => state.timeReducer);
  const {endtime} = state;

  useEffect(() => {

    const app = document.querySelector('.container');
    const month = endtime.getDateObject().getMonth();
    const seasons = ['springDiv', 'summerDiv', 'autumnDiv', 'winterDiv'];

    app?.classList.remove(...seasons);

    switch(month) {
      case 11: //12월
      case 0: //1월
      case 1: //2월
        app?.classList.add("winterDiv");
        break;
      case 2:
      case 3:
      case 4:
        app?.classList.add("springDiv");
        break;
      case 5:
      case 6:
      case 7:
        app?.classList.add("summerDiv");
        break;
      case 8:
      case 9:
      case 10:
        app?.classList.add("autumnDiv");
        break;
    }
  }, [endtime]);

  return <div className="container">
    <Timer></Timer>
    <Detail></Detail>
  </div>
}

export default Container;