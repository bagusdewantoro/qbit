import { nanoid } from 'nanoid';

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


// const post = (state = [], action) => {
//   switch(action.type) {
//     case 'ADD':
//       return [...state, action.payload]
//     default:
//       return state;
//   }
// }
//
// export default post;

const post = (state = [], action) => {
  const newPost = [];
  switch(action.type) {
    case 'ADD':
      newPost[0] = nanoid();
      newPost[1] = action.payload;
      return [...state, newPost];
    case 'UPDATE':

      console.log(state.filter(s => s[0] === action.payload)[0][1].status)
      console.log(state.filter(s => s[0] === action.payload)[0])
      console.log(state)

      const edited = state.map(s => {
        if (s[0] === action.payload[0]) {
          return {...s[1], status: 1}
        }
        return s[1];
      })

      // return edited;
      // [
      //   {"title":"ss","message":"ss","status":0},
      //   {"title":"dd","message":"dd","status":0}
      // ]
      return state;
      // [
      //   ["eO_gQ5NbBQEAktj-qpEiD",{"title":"dd","message":"dd","status":0}],
      //   ["wB1Io7DUSlW35CZLSz0ra",{"title":"ddd","message":"fff","status":0}]
      // ]
    default:
      return state;
  }
}

export default post;
