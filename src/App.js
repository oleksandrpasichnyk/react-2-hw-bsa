import './App.css';
import Chat from './messageList/index';
// import Modal from './messageModal';

function App(props) {
  console.log(props);
  return (
    <div className='App'>
      <Chat></Chat>
      {/* <Modal></Modal> */}
    </div>
  );
}

export default App;
