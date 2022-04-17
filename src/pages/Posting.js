import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addItem } from '../actions';
import PostData from './PostData';
import credentials from '../credentials';

const Posting = () => {
  const [postData, setPostData] = useState({
    title: '', message: '', status: 0
  })
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(postData));
    setPostData({...postData, title: '', message: '', status: 0})
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
                <label>Status (1 to publish | 0 for draft)</label>
                <select
                  value={postData.status}
                  onChange={(e) => setPostData({ ...postData, status: Number(e.target.value)})}
                >
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                </select>
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
