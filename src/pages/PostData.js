import { useSelector, useDispatch } from 'react-redux';

import { updateItem } from '../actions';

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const handleCheckbox = e => {
    dispatch(updateItem(post[0]))
  }
  return (
    <div className='post'>
      <h5>{post[1].title}</h5>
      <p>{post[1].content}</p>
      <input
        type='checkbox'
        checked={post[1].posting}
        onChange={handleCheckbox}
      />
    </div>
  )
}

const PostData = () => {
  const posts = useSelector((state) => state.post);
  return (
    !posts.length ?
    <p>There is no post yet</p> :
    (
      <div className='full-container'>
        { posts.map(post => (
          <Post key={post[0]} post={post} />
        ))}
      </div>
    )
  )
}

export default PostData;
