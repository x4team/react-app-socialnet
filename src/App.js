import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
  <div className = 'app-wrapper'>
    <Header />
    <Navbar />
    <Profile />
    <Content />
    <Footer />
  </div>
  );
}

export default App;
