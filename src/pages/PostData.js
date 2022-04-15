import { useSelector } from 'react-redux';

const Post = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.message}</p>
    </div>
  )
}

const PostData = () => {
  const posts = useSelector((state) => state.post)
  return (
    // !Object.keys(posts).length ?
    !posts.length ?
      <h3>There is no post</h3> :
      (
        <div>
          { posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )
  )
}

export default PostData;
