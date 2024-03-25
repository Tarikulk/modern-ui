import React from 'react';
import people from '../../assets/people.png'; 
import './header.css';
import Lottie from 'lottie-react';
import aiRobot from "../../assets/lotti.json";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Create Something Extraordinary with the Power of AI</h1>
      <p>While on the journey, seek comfort in the pleasing assistance provided. Embrace the joy of diverse experiences, and find blessings in every exercise. Let the lively changes and strong connections bring delight. Over the years, we invite you to embrace the freedom to explore and inquire.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 requests for visit access within the last day</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <span><Lottie animationData={aiRobot}></Lottie></span> 
    </div>
  </div>
);

export default Header;