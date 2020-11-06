import React from 'react';
import Title from './Title';
import SearchForm from './SearchForm';
import Trending from './Trending'
import logo from '../logo.png';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <Title />
      <div className="motive">
        <Link to="/"><img alt="" src={logo} height="100%" width="175"/></Link>
        <p className="moto"><strong>A very good lyrics finder app</strong></p>
      </div>
      <SearchForm />
      <Trending />
    </div>
  );
}

export default Home;
