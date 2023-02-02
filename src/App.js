// import logo from './logo.svg';
import React from 'react'
import logo from './images/bunny_website_bun.png';
import './App.css';
import MainInviteComponent from './components/MainInviteComponent';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {

  const contentBlock = document.querySelector('.content');
  let currentScrollPosition = 0;
  let maxScrollPosition = 0;
  let hasMaxScrollPositionReached = false;

  // if(contentBlock) {
  //   contentBlock.addEventListener('scroll', (event) => {
  //     console.log('scrolling');
  //     console.log(event.type === 'scroll');
  //     currentScrollPosition =  contentBlock.scrollTop;
  //     maxScrollPosition = contentBlock.scrollHeight - contentBlock.clientHeight;
  //     // document.body.style.setProperty('--scroll', (currentScrollPosition/maxScrollPosition).toString());
  //   })
  // }
  
  return (
    <div className="App">
      <header className="App-header">
        <div className='AnimationSection'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='content' id='contentBlock'>
          <Page1 />
          <Page2 />
          <Page3 />
        </div>
      </header>
    </div>
  );
}

export default App;
