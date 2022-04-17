import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addItem } from '../actions';
import PostData from './PostData';
import credentials from '../credentials';

const Posting = () => {
  const [postData, setPostData] = useState({
    title: '', content: '', posting: 0
  })
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postData.title.trim() === '' || postData.content.trim() === '') alert('Title and Content Fields are Required')
    else {
      dispatch(addItem(postData));
      setPostData({...postData, title: '', content: '', posting: 0})
    }
  };

  return (
    <div>
      {
        localStorage.getItem('auth-token') !==  credentials.token ? (
          <p>Please {<Link to='/login'>login</Link>} first to access this section</p>
        ) : (
          <div>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
              <div>
                <label htmlFor='title'>Title</label>
                <input
                  id='title' type='text' placeholder='Input Title...' value={postData.title}
                  onChange={(e) => setPostData({ ...postData, title: e.target.value})}
                />
                <label htmlFor='content'>Content</label>
                <input
                  id='content' type='text' placeholder='Input Message...' value={postData.content}
                  onChange={(e) => setPostData({ ...postData, content: e.target.value})}
                />
                <label htmlFor='posting'>Posting (1 for posting | 0 for draft)</label>
                <select
                  id='posting' value={postData.posting}
                  onChange={(e) => setPostData({ ...postData, posting: Number(e.target.value)})}
                >
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                </select>
                <input type='submit' className='accent-button'/>
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
