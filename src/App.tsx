import React, {useEffect} from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import './App.scss';
import Container from './components/Container'

const App: React.FC = () => {
  const state = useSelector((state:RootStateOrAny) => state.timeReducer);
  const {endtime} = state;

  useEffect(() => {

    const app = document.querySelector('.App');
    const month = endtime.getDateObject().getMonth();
    const seasons = ['spring', 'summer', 'autumn', 'winter'];

    app?.classList.remove(...seasons);

    switch(month) {
      case 11: //12월
      case 0: //1월
      case 1: //2월
        app?.classList.add("winter");
        break;
      case 2:
      case 3:
      case 4:
        app?.classList.add("spring");
        break;
      case 5:
      case 6:
      case 7:
        app?.classList.add("summer");
        break;
      case 8:
      case 9:
      case 10:
        app?.classList.add("autumn");
        break;
    }
  }, [endtime]);

  return (
    <div className="App">
      <Container></Container>
    </div>
  );
}

export default App;
