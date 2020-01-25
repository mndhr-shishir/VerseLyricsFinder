import React from 'react';
import Title from './Title';

const About = () => {
  return (
    <div className="aboutus container">
      <Title title={"Verse | About Us"} />
      <h1> About Us</h1>
      <p>We use "VERSE" because it means the main part of lyrics. As music lovers, We realized that most of the websites had a complex user interface. So we decided to think of a simple and interactive webpage in which a user can search the lyrics of a particular song along with its Youtube video. That's why Verse was created - this is when a concept become reality</p>
      <h3>Our Team</h3>
      <div className=""><p><a href="https://www.github.com/mndhr-shishir">Shishir Manandhar (sisir.mdr@gmail.com)</a></p></div>
      <div className=""><p><a href="https://www.github.com/MhrjAniiz">Anish Maharjan (anish.maharjan17@gmail.com)</a></p></div>
      <div className=""><p><a href="https://www.github.com/SumanMarahatha7">Suman Marahatha (sumancr.marahatha@gmail.com)</a></p></div>
      <div className=""><p><a href="https://www.github.com/lakas422">Lakash Shakya (shakya.lakash01@gmail.com)</a></p></div>
      <div className=""><p><a href="https://www.github.com/parameshwor">Parameshwor Rokaha (rokahaparameshwor2@gmail.com)</a></p></div>
    </div>
  );
}

export default About;
