import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import TopCharts from './components/TopCharts';
import SearchSuggestions from './components/SearchSuggestions';
import ShowLyrics from './components/ShowLyrics';
import './App.css';
import logo from './logo.png'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path={`/lyrics/:artist/:title`} component={ShowLyrics}></Route>
        <Route path={`/search/:title`} component={SearchSuggestions}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/top" component={TopCharts}></Route>
        <Route exact path="/" component={Home}></Route>
        <Redirect to="/" />
        {/*<Route component={Error404}></Route>*/}
      </Switch>
      <div className="footer">
        <p><img style={{verticalAlign: "middle"}} alt=""src={logo} width="1.5%" height="1.5%"/>erse, 2020</p>
      </div>
    </div>
  );
}


export default App;
