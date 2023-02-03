// import logo from './logo.svg';
import React from 'react'
import logo from './images/bunny_website_bun.png';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import CookieController from './Controller/CookieController';
import './fonts/odstemplik.otf';

function App() {

  const cookieController = new CookieController();
  let isFormCompleted = false;

  function load(){
    isFormCompleted = cookieController.getCookieValue();
  }

  const devDeleteCookies = () => {
    cookieController.deleteCookies();
  }

  load();
  
  return (
    <div className="App">
      <header className="App-header">
        <div className='AnimationSection' onClick={devDeleteCookies}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='content' id='contentBlock'>
          <Page1 />
          <Page2 />
          <Page3 isFormCompleted={isFormCompleted}/>
        </div>
      </header>
    </div>
  );
}

export default App;
