const getNewId = () => (new Date()).getTime();

export default getNewId;


// makeid(length) {
//   let result = '';
//   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   for ( let i = 0; i < length; i++ ) {
//      result += characters.charAt(Math.floor(Math.random() *characters.length));
//   };
//   return result;
// };