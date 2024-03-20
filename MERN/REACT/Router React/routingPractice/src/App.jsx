import React from 'react';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import Style from './components/Style';
import String from './components/String';
import Number from './components/Number';
import Home from './components/home';

const App = () => {
  return (
    <BrowserRouter>
      <Link to={"/Home"}>Home</Link>
      <Link to={"/Number"}>Test Number</Link>
      <Link to={"/String"}>Test String</Link>
      <Link to={"/Style"}>Test Background</Link>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/:number" element={<Number />} />
        <Route exact path="/string/:string" element={<String />} />
        <Route exact path="/styled/:string/:color/:background" element={<Style />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
