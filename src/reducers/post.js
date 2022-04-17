import { nanoid } from 'nanoid';

const post = (state = [], action) => {
  const newPost = [];
  switch(action.type) {
    case 'ADD':
      newPost[0] = nanoid();
      newPost[1] = action.payload;
      return [...state, newPost];
    case 'UPDATE':
      const edited = state.map(s => {
        if (s[0] === action.payload) {
          const newStatus = s[1].posting === 0 ? 1 : 0;
          const newObj = {...s[1], posting: newStatus};
          const newAr = [s[0], newObj];
          return newAr
        }
        return s;
      })
      return edited;
    default:
      return state;
  }
}

export default post;
