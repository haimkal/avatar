import { Component } from 'react';
import Avatar from './Avatar/Avatar';
import './App.css';


class App extends Component{
  
  render() {
    return (
      <div className="App">
        <Avatar shape="circle" width={150}/>
      </div>
    );
  }
}


export default App;
