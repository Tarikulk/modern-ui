import React from 'react';
import './App.css';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from "./Containers";
import { CTA, Brand, Navbar } from './Components';


const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;