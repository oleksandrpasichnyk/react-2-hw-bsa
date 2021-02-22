import Spinner from './components/Spinner';
import React from 'react';
import Header from './components/Header';
import MessageList from './components/MessageList';
import { connect } from 'react-redux';
import * as actions from './actions';
import { setCurrentMessageId, showModal } from '../messageModal/actions';

import './styles/Chat.css';
import './styles/MessageInput.css';

class Chat extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded: props.isLoaded,
      messages: props.messages,
      currentUserId: props.currentUserId,
      currentUser: props.currentUser,
      currentUserAvatar: props.currentUserAvatar,
    };
    this.onSend = this.onSend.bind(this);
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.sendMessage(e.target);
    }
  }
  
  onSend(e){
    let input = e.target.previousElementSibling;
    if(input.value){
      this.props.sendMessage(input); 
      this.forceUpdate();
    }
  }

  onDelete(e){
    let messageId = e.target.closest('.message-container').getAttribute('data-id');
    // console.log(this.props);
    this.props.deleteMessage(messageId);
    this.forceUpdate();
  }

  render() {
    if (this.state.error) {
      return <div>Помилка: {this.state.error.message}</div>;
    } else if (this.props.isLoaded) {
      return (
        <div className='spinner-container'>
          <Spinner type="ThreeDots" color="#00BFFF" height={80} width={80} timeout={3000}/>
        </div>
      );
    } else {
      return (
        <div className = 'chat-container'>
          <Header messages={this.props.messages.messages}></Header> 
          <MessageList messagesData={this.props}></MessageList>
          <div className = 'message-input-block'>
            <input onKeyDown={(e) => this.handleKeyDown(e)} className='message-input'></input>
            <button onClick = {(e) => this.onSend(e)} className='message-send-btn'>Send</button>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messageList
  }
};

const mapDispatchToProps = {
  ...actions,
  setCurrentMessageId,
  showModal
};

export default connect(mapStateToProps, mapDispatchToProps) (Chat);