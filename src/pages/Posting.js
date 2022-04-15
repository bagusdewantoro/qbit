import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addItem } from '../actions';
import PostData from './PostData';
import credentials from '../credentials';

const Posting = () => {
  const [postData, setPostData] = useState({
    id:0, title: '', message: '', status: 0
  })
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(postData));
    setPostData({...postData, id: postData.id + 1, title: '', message: '', status: 0})
  };

  return (
    <div>
      <h1>Posting</h1>
      {
        localStorage.getItem('auth-token') !==  credentials.token ? (
          <p>Please {<Link to='/login'>login</Link>} first to access this section</p>
        ) : (
          <div>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
              <div>
                <label>Title</label>
                <input
                  type='text' placeholder='Input Title...' value={postData.title}
                  onChange={(e) => setPostData({ ...postData, title: e.target.value})}
                />
                <label>Message</label>
                <input
                  type='text' placeholder='Input Message...' value={postData.message}
                  onChange={(e) => setPostData({ ...postData, message: e.target.value})}
                />
                <input type='submit' />
              </div>
            </form>
            <PostData />
          </div>

        )
      }
      </div>
    )
};

export default Posting;
