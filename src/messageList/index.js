import Spinner from './components/Spinner';
import React from 'react';
import Header from './components/Header'
import MessageList from './MessageList';
import './styles/Chat.css'
import './styles/MessageInput.css';

class Chat extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
    this.state = {
      isLoaded: false,
      messages: [],
      currentUserId: null,
      currentUser: null,
      currentUserAvatar: null,
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(input){
    let messageText = input.value;
    if(messageText){
      let message = {
        "id": '0', // this.makeid(30),
        "userId": this.state.currentUserId,
        "avatar": this.state.currentUserAvatar,
        "user": this.state.currentUser,
        "text": messageText,
        "createdAt": new Date().toISOString(),
        "editedAt": ""
      };
  
      this.state.messages.push(message);

      this.setState({
        messages: this.state.messages,
      })

      input.value = '';
    }
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.sendMessage(e.target);
    }
  }
  
  render() {
    if (this.state.error) {
      return <div>Помилка: {this.state.error.message}</div>;
    } else if (!this.state.isLoaded) {
      return (
        <div className='spinner-container'>
          <Spinner type="ThreeDots" color="#00BFFF" height={80} width={80} timeout={3000}/>
        </div>
      );
    } else {
      return (
        <div className = 'chat-container'>
          <Header messages={this.state.messages}></Header>
          <MessageList messagesData={this.props.messageList}></MessageList>
          <div className = 'message-input-block'>
            <input onKeyDown={(e) => this.handleKeyDown(e)} className='message-input'></input>
            <button onClick = {(e) => this.sendMessage(e.target.previousElementSibling)} className='message-send-btn'>Send</button>
          </div>
        </div>
      );
    }
  }
}

export default Chat;