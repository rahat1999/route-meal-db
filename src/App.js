import './App.css';
import Resturent from './components/Resturent/Resturent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import MealDetails from './components/MealDetails/MealDetails';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/resturant">
            <Resturent></Resturent>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/meals/:mealId">
            <MealDetails></MealDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
