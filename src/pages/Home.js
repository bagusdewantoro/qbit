import { useSelector } from 'react-redux';

const Filtered = ({ post }) => {
  return (
    <div className='post'>
      <h5>{post[1].title}</h5>
      <p>{post[1].content}</p>
    </div>
  )
}

const Home = () => {
  const posts = useSelector((state) => state.post);
  return (
    <div>
      {!posts.length ?
        <p>There is no post yet</p> :
        (
          <div className='container'>
            { posts
              .filter(p => p[1].posting === 1)
              .map(post => (<Filtered key={post[0]} post={post} />))
            }
          </div>
        )}
    </div>
  );
}

export default Home;
