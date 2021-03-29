import './App.css';
import { useRecoilValue, useRecoilState } from "recoil";
import { countState , doubleState } from './recoil/atom'
import Header from './Header';

const App = () => {
  
  const [count, setCount] = useRecoilState(countState);
  const double = useRecoilValue(doubleState);


  const increment = () => {
    setCount(count+1);
  }
  const decrement = () => {
    setCount(count-1);
  }
  const start = () => {
    setCount(0);
  }
  
  return (

    <div className="App">
      <Header />
      <p>値1：{count}</p>
      <p>値2；{double}</p>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={start}>リセット</button>

    </div>
  );
}

export default App;
