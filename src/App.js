import React, { Component } from 'react';
import UiCardHome from './components/UiCardHome';
import './App.scss'
class App extends Component {
  render() {
    return (
      <div className='body'>
        
        <div>
          <h1>Hello</h1>
        </div>
        <div className='div-center'>
        <UiCardHome />
        </div>
          
      </div>
    );
  }
}

export default App;
