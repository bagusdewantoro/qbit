import { useSelector, useDispatch } from 'react-redux';

import { updateItem } from '../actions';

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const handleCheckbox = e => {
    dispatch(updateItem(post[0]))
  }
  return (
    <div>
      <h3>{post[1].title}</h3>
      <p>{post[1].message}</p>
      <input
        type='checkbox'
        checked={post[1].status}
        onChange={handleCheckbox}
      />
    </div>
  )
}

const PostData = () => {
  const posts = useSelector((state) => state.post);
  return (
    !posts.length ?
    <h3>There is no post</h3> :
    (
      <div>
        { posts.map(post => (
          <Post key={post[0]} post={post} />
        ))}
      </div>
    )
  )
}

export default PostData;
