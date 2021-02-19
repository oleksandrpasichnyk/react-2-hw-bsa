import { SEND_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE } from './actionTypes';

// const URL = "https://edikdolynskyi.github.io/react_sources/messages.json";

let InitialState = {
  isLoaded: true,
  messages: [{
    "id": "80f08600-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    "avatar": "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    "user": "Ruth",
    "text": "I don’t *** understand. It's the Panama accounts",
    "createdAt": "2020-07-16T19:48:12.936Z",
    "editedAt": ""
}, {
    "id": "80e00b40-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "533b5230-1b8f-11e8-9629-c7eca82aa7bd",
    "avatar": "https://resizing.flixster.com/EVAkglctn7E9B0hVKJrueplabuQ=/220x196/v1.cjs0NjYwNjtqOzE4NDk1OzEyMDA7MjIwOzE5Ng",
    "user": "Wendy",
    "text": "Tells exactly what happened.",
    "createdAt": "2020-07-16T19:48:42.481Z",
    "editedAt": "2020-07-16T19:48:47.481Z"
}, {
    "id": "80e03259-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "533b5230-1b8f-11e8-9629-c7eca82aa7bd",
    "avatar": "https://resizing.flixster.com/EVAkglctn7E9B0hVKJrueplabuQ=/220x196/v1.cjs0NjYwNjtqOzE4NDk1OzEyMDA7MjIwOzE5Ng",
    "user": "Wendy",
    "text": "You were doing your daily bank transfers and…",
    "createdAt": "2020-07-16T19:48:56.273Z",
    "editedAt": ""
}],
  currentUserId: "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
  currentUser: "Ruth",
  currentUserAvatar: "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
};

// const getInitialState = url => {
//   fetch(URL)
//   .then(res => res.json())
//   .then(
//     (result) => {
//       let state = {
//         isLoaded: true,
//         messages: result,
//         currentUserId: result[0].userId,
//         currentUser: result[0].user,
//         currentUserAvatar: result[0].avatar,
//       };
//       return state;
//     },
    
//     (error) => {
//       return {
//         isLoaded: true,
//         error
//       };
//     }
//   )
// }

export default function listReducer(state = InitialState, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      const { id, data } = action.payload;
      const newMessage = { id, ...data};
      return { ...state.messages, newMessage };
    }

    case EDIT_MESSAGE: {
      const { id, data } = action.payload;
      const editMessages = state.messages.map(message => {
        if(message.id === id){
          return { ...message, ...data};
        } else {
          return message;
        }
      });
      return editMessages;
    }

    case DELETE_MESSAGE: {
      const { id } = action.payload;
      const filteredMessages = state.messages.filter(message => message.id !== id);
      return filteredMessages;
    }

    default:
      break;
  }
  console.log(state)

}

