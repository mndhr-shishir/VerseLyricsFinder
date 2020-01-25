import React from 'react';
import shishir from '../team/shishir.jpg';
import anish from '../team/anish.jpg';
import suman from '../team/suman.jpg';
import lakash from '../team/lakash.jpg';
import parme from '../team/parme.jpg';

const About = () => {
  return (
    <div className="container">
      <div className="grid-container">
        <div className="grid-item card">
          <div className="card-container">
            <img alt="" src={shishir} height="50%" width="100%"style={{paddingTop: "2rem"}}/>
            <h3 className="suggestion-title">Shishir Manandhar</h3>
            <p className="suggestion-artist">sisir.mdr@gmail.com</p>
          </div>
        </div>

        <div className="grid-item card">
          <div className="card-container">
            <img alt="" src={anish} height="100%" width="100%" style={{paddingTop: "1.5rem"}}/>
            <h3 className="suggestion-title">Anish Maharjan</h3>
            <p className="suggestion-artist">anishmaharjan17@gmail.com</p>
          </div>
        </div>

        <div className="grid-item card">
          <div className="card-container">
            <img alt="" src={suman} height="50%" width="100%" style={{paddingTop: "1.5rem"}}/>
            <h3 className="suggestion-title">Suman Marahatha</h3>
            <p className="suggestion-artist">sumancr.marahata@gmail.com</p>
          </div>
        </div>

        <br />

        <div className="grid-item card">
          <div className="card-container">
            <img alt="" src={lakash} height="50%" width="100%" style={{paddingTop: "1.5rem"}}/>
            <h3 className="suggestion-title">Lakash Shakya</h3>
            <p className="suggestion-artist">shakya.lakash01@gmail.com</p>
          </div>
        </div>

        <div className="grid-item card">
          <div className="card-container">
            <img alt="" src={parme} height="50%" width="100%" style={{paddingTop: "1.5rem"}}/>
            <h3 className="suggestion-title">parameshwor rokaha</h3>
            <p className="suggestion-artist">parameshworokaha@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
