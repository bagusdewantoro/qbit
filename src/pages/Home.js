import { useSelector } from 'react-redux';

import { updateItem } from '../actions';

const Filtered = ({ post }) => {
  return (
    <div>
      <h3>{post[1].title}</h3>
      <p>{post[1].message}</p>
    </div>
  )
}

const FilteredPosts = () => {
  const posts = useSelector((state) => state.post);
  return (
    !posts.length ?
    <h3>There is no post</h3> :
    (
      <div>
        { posts.map(post => (
          <Filtered key={post[0]} post={post} />
        ))}
      </div>
    )
  )
}

const Home = () => {
const posts = useSelector((state) => state.post);
// posts.filter(p => p[1].status === 0)
  return (
    <div>
      <h1>Home</h1>
      {!posts.length ?
        <h3>There is no post</h3> :
        (
          <div>
            { posts
              .filter(p => p[1].status === 1)
              .map(post => (<Filtered key={post[0]} post={post} />))
            }
          </div>
        )}
    </div>
  );
}

export default Home;
