import React from 'react'; 
import Robot from '../../assets/robot.json';
import './possibility.css';
import Lottie from 'lottie-react';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
    <span><Lottie animationData={Robot}></Lottie></span> 
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access and Begin Your Journey.</h4>
      <h1 className="gradient__text">The possibilities transcend <br /> your imagination.</h1>
      <p>Yet for any bed, traveling assistance, though unpleasing, indulgence is granted. No thoughts, all exercise, a blessing. Indulgence in every way, joy alteration, boisterous attachment. Over the years, we party, to order, allowing asked for.</p>
      <h4>Request Early Access and Begin Your Journey.</h4>
    </div>
  </div>
);

export default Possibility;