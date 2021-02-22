import React from 'react';
import '../styles/MessageList.css'
import likeIcon from '../../assets/like.png';
import editIcon from '../../assets/edit.png';
import deleteIcon from '../../assets/delete.png';

class Message extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.messageData.message.id,
      userId: this.props.messageData.message.userId,
      avatar: this.props.messageData.message.avatar,
      text: this.props.messageData.message.text,
      date: new Date(this.props.messageData.message.createdAt),
      isCurrentUserMessage: this.props.messageData.id === this.props.messageData.message.userId,
      isLiked: false,
    };
    this.likeMessage = this.likeMessage.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  };

  onEdit(e){
    let messageId = e.target.closest('.message-container').getAttribute('data-id');
    this.props.messageData.setCurrentMessageId(messageId);
    this.props.messageData.showModal();
  }

  onDelete(e){
    let messageId = e.target.closest('.message-container').getAttribute('data-id');
    this.props.messageData.deleteMessage(messageId);
  }

  getHours(){
    return this.state.date.getUTCHours();
  }

  getMinutes(){
    return this.state.date.getMinutes();
  }

  likeMessage(){
    if(!this.state.isCurrentUserMessage){
      this.setState({
        isLiked: !this.state.isLiked,
      });
    }
  }

  render() {
    return (
      <div className = 'message-container' data-id={this.state.id}>
        <div className={this.state.isCurrentUserMessage ? 'current-user-message-block' : 'user-message-block'}>
          <img className={this.state.isCurrentUserMessage ? 'user-avatar-hidden' : 'user-avatar'} src = {this.state.avatar} alt = "avatar"></img>
          <div onClick={this.likeMessage} className = {this.state.isCurrentUserMessage ? 'message current-user-message' : 'message'}>
            <div className = 'message-block'>
              <p className = 'message-text'>{this.state.text}</p>
              <div className = { this.state.isCurrentUserMessage ? 'message-date-menu-block' : 'message-date-block' }>
                {
                  this.state.isCurrentUserMessage ?
                  <div className = 'message-icons-menu'>
                    <img onClick = { (e) => this.onEdit(e) } className = 'edit-icon' src = { editIcon } alt = 'Edit icon'></img>
                    <img onClick = { (e) => this.onDelete(e) } className = 'delete-icon' src = { deleteIcon } alt = 'Delete icon'></img>
                  </div>
                  : null
                }
                <p className = 'message-date'>{this.getHours()}:{this.getMinutes()}</p>
              </div>
            </div>
            <div className = {this.state.isLiked ? 'like-block' : 'like-block-hidden'}>
              <img className = 'like-icon' src = { likeIcon } alt = 'Like icon'></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Message;