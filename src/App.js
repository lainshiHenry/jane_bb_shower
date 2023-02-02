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
        <div className='content'>
          <Page1 />
          <Page2 />
          <Page3 />
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
        </div>
        
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
