
import './App.css';
import Counter from './components/Counter/Counter';
import EvenCounter from './components/EvenCounter/EvenCounter';

function App(props) {
  return (
    <div className="App"> 
    <Counter store={props.store} />


    <hr />
    <EvenCounter store={props.store} />
    </div>
  );
}

export default App;
