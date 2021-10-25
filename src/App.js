import './App.css';
import Home from './page/Home/Home';
import Career from './page/Career/Career';
import Explicit from './page/Explicit/Explicit';
import Money from './page/Money/Money';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Career" exact component={Career}></Route>
        <Route path="/Money" exact component={Money}></Route>
        <Route path="/Explicit" exact component={Explicit}></Route>
      </Switch>
    </div>
  );
}

export default App;
