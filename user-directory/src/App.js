import './reset.css';
import './index.css';
import { Component } from 'react';
import Top from './components/Top.js'
import Slides from './components/Slides.js';
import Bottom from './components/Bottom.js';

class App extends Component {
  
  render() {
    return (
      <div id = "main">
        <Top />
        <div className = "content">
          <Slides />
          <Bottom />
        </div>
      </div>
    );
  }
}

export default App;
