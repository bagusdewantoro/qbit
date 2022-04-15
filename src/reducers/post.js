// const postReducer = (state = {}, action) => {
//   const newPost = Object.assign({}, state);
//   switch(action.type) {
//     case 'ADD':
//       newPost[
//         Math.random().toString(36).replace(/[^a-z]+/g, '')
//       ] = {
//         complete: false,
//         label: action.payload
//       };
//       break;
//     default:
//       break;
//   }
//
//   return newPost;
// }
//
// export default postReducer;


const post = (state = [], action) => {
  switch(action.type) {
    case 'ADD':
      return [...state, action.payload]
    default:
      return state;
  }
}

export default post;
