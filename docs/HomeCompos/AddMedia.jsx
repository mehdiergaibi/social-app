import React, { useEffect } from "react";
import { IoMdAddCircle } from "react-icons/io";
import "./homestyle/addMedia.css";
import { useState } from "react";

function AddMedia() {
  const [addMedia, setAddMedia] = useState(false);
  const addMediaHandler = () => setAddMedia(true);
  const closeMediaHandler = () => setAddMedia(false);
  return (
    <>
      <div className="add-media">
        <IoMdAddCircle onClick={addMediaHandler} className="add-icon-media" />
        <span className="add-tit">Share Media... Texts </span>
      </div>
      {addMedia ? (
        <div className="pop-up">
          <textarea
            className="whts-in"
            name="mind"
            placeholder="what is in your mind"
            cols="31"
            rows="2"
            minLength="1"
            maxLength="1000"
            spellCheck
          ></textarea>
            <div className="media">
            <input className="img-media" id="image" type="file" accept="image/*" />
            <label htmlFor="image">Choose an image</label>

          <input className="video-media" id="video" type="file" accept="video/*" />
          <label htmlFor="video">Choose a video</label>

            </div>
          <div className="btns">
          <button className="post-btn">post</button>
          <button className="close-btn" onClick={closeMediaHandler}>close</button>
          </div>
          
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AddMedia;
