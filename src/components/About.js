import React from 'react';
import Title from './Title';

const About = () => {
  return (
    <div className="about-us container">
      <Title title={"Verse | About Us"} />
      <div className="centered">
        <div className="main">
          <h1 style={{borderBottom: "1px solid", marginTop: "2rem"}}> About Us</h1>
          <p>
            We use "VERSE" because it means the main part of lyrics.
            As a music lovers, We realized that most of the websites had a complex user interface.
            We provide a simple and interactive webpage in which a user can search the lyrics of a particular song along with its Youtube video.
            That's why verse was created.This is when a concept become reality
          </p>
        </div>
        <h3 style={{borderBottom: "1px solid"}}>Our Team</h3>
        <div><p className="email">Shishir Manandhar, sisir.mdr@gmail.com<br />github: <a href="https://www.github.com/mndhr-shishir">mndhr-shishir</a></p></div>
        <div><p className="email">Anish Maharjan, anish.maharjan17@gmail.com<br />github: <a href="https://www.github.com/MhrjAniiz">MhrjAniiz</a></p></div>
        <div><p className="email">Suman Marahatha, sumancr.marahatha@gmail.com<br />github: <a href="https://www.github.com/SumanMarahatha7">SumanMarahatha7</a></p></div>
        <div><p className="email">Lakash Shakya, shakya.lakash01@gmail.com<br />github: <a href="https://www.github.com/lakas422">lakas422</a></p></div>
        <div><p className="email">Parameshwor Rokaha, rokahaparameshwor2@gmail.com<br />github: <a href="https://www.github.com/parameshwor">parameshwor</a></p></div>
      </div>
    </div>
  );
}

export default About;
