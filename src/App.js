// import logo from './logo.svg';
import logo from './images/bunny_website_bun.png';
import './App.css';

function App() {

  const contentBlock = document.querySelector('.content');
  let currentScrollPosition = 0;
  let maxScrollPosition = 0;
  let hasMaxScrollPositionReached = false;

  if(contentBlock) {
    contentBlock.onscroll = (event) => {
      console.log('scrolling');
      currentScrollPosition =  contentBlock.scrollTop;
      maxScrollPosition = contentBlock.scrollHeight - contentBlock.clientHeight;
      hasMaxScrollPositionReached = Math.abs(contentBlock.scrollHeight - contentBlock.clientHeight - contentBlock.scrollTop) < 1;
      document.body.style.setProperty('--scroll', currentScrollPosition/maxScrollPosition);
      document.getElementById('demo').innerHTML = document.body.style.getPropertyValue('--scroll');
    }
  
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p id='demo'></p>
        <div className='content'>
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
