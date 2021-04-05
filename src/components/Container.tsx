import React, {useEffect} from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import Timer from './Timer';
import Detail from './Detail'
import './scss/Container.scss';

//Generics : 1. 상태가 null일 수도 아닐 수도 있을 때  2. 상태의 타입이 까다로운 구조를 가진 객체이거나 배열
//case1. 
//type Information = { name: string; description: string };
//const [info, setInformation] = useState<Information | null>(null);

//case2.
//type Todo = { id: number; text: string; done: boolean };
//const [todos, setTodos] = useState<Todo[]>([]);

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