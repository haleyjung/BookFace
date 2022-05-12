import React from 'react';
import moment from 'moment';

export default function Posts({ post }) {

  // console.log(post)

  return (
    <div className='club-post'>
      <div className='post-header'>
        <div className='username'>
          Message {post.id} by <span>{post.userId}</span>
        </div>
        <div className='post-date'>
        {moment(post.postDate).format('MMMM Do YYYY') }
          {/* {post.postDate} */}
        </div>
      </div>
      <div className='post-body'>
        <div className='userImg'>
          <img src={post.posterUserImg} alt='userImage' />
        </div>
        <div className='user-post'>
          <p> {post.postBody}</p>
        </div>
      </div>
    </div>
  );
}
