import React from 'react';
import SearchForm from './SearchForm';
import Trending from './Trending'
import logo from '../logo.png';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <div className="motive">
        <Link to="/"><img alt="" src={logo} height="100%" width="175"/></Link>
        <p className="moto"><strong>A lyrics finder app</strong></p>
      </div>
      <SearchForm />
      <Trending/>
    </div>
  );
}

export default Home;
