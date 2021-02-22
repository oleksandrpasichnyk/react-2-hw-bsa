import './App.css';
import React from 'react';
import Chat from './messageList';
import Modal from './messageModal';

class App extends React.Component {
  // console.log(this);
  // componentDidMount(){
  //   console.log(this.props);
  // }
  render(){
    return (
      <div className='App'>
        <Chat></Chat>
        <Modal></Modal>
      </div>
    );
  }
}

export default App;
