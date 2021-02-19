// import React from 'react';
// // import {connect} from 'react-redux';
// // import * as actions from './actions';
// // import { editMessage } from '../messageList/actions';
// // import messageInput from '../shared/inputs/messageInput';
// // import messageFormConfig from '../shared/config/messageFormConfig';
// import defaultMessageConfig from '../shared/config/defaultMessageConfig';
// import './modal.css';

// class Modal extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = this.getDefaultMessageData();
//     this.onCancel = this.onCancel.bind(this);
//     // this.onSave = this.onSave.bind(this);
//     this.onChangeMessage = this.onChangeMessage.bind(this);
//   }

//   componentWillReceiveProps(nextProps) {
//     if(nextProps.messageId !== this.props.messageId){
//       const message = this.props.messages.find(message => message.id !== this.props.messageId);
//       this.setState({ message });
//     }
//   }

//   onCancel(){
//     this.props.dropCurrentMessageId();
//     this.props.hideModal();
//     this.setState(this.getDefaultMessageData());
//   };

//   onChange(e){
//     let value = e.target.value;
//     this.setState({
//       ...this.state,
//       text: value
//     })
//   };

//   getDefaultMessageData(){
//     return {
//       ...defaultMessageConfig
//     }
//   };

//   getMessageModalContent(){
//     // const data = this.state;
//     return (
//       <div className='modal'>

//       </div>
//     )
//   }

//   render(){
//     const isShown = this.props.isShown;
//     return isShown ? this.getMessageModalContent() : null;
//   }
// }

// export default Modal;