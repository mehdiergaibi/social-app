import React from "react";
import './homestyle/post.css';
import { IoSendSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";


function Post(props) {
  return (
    <>
    <div className="all-post">
      <div className="info">
        <img src={props.profile} className="profile" />
        <p className="user-name">{props.uname}</p>
        <p className="time">{props.time}</p>
      </div>
      <div className="post">
        <img className="the-post" src={props.post} />
        <FaHeart className="like" />

      </div>
      <div className="comments">
        <input type="text" placeholder="add comment" />
        <IoSendSharp className="send" />
      </div>
    </div>
    </>
    
  );
}

export default Post;
