import React, { useContext, useRef, useState } from "react";
import "./SharePost.scss";
import { MdAddAPhoto } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { AiFillTags } from "react-icons/ai";
import { BsEmojiSmileFill } from "react-icons/bs";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";

const SharePost = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post("/posts", newPost);
      alert("Post uploaded");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sharePost">
      <div className="sharePost__container">
        <div className="sharePost__profile">
          <img src={PF + user.profilePic} alt="" />
          <h5>{user.username}</h5>
        </div>
        <div className="sharePost__paragraph">
          <textarea
            type="text"
            placeholder={`What's in your mind ${user.username}  ?`}
            className="shareInput"
            ref={desc}
          />
        </div>
        <div className="separator"></div>
        <form className="sharePost__buttons" onSubmit={submitHandler}>
          <div className="sharePost__button_container">
            <label htmlFor="file" className="button">
              <MdAddAPhoto fill="#70b5f9" size="22px" />
              <p>Photo/Video</p>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="button">
              <MdLocationOn fill="#7fc15e" size="22px" />
              <p>Location</p>
            </div>
            <div className="button">
              <AiFillTags fill="#e7a33e" size="22px" />
              <p>Tag</p>
            </div>
            <div className="button">
              <BsEmojiSmileFill fill="#fc9295" size="18px" />
              <p>Feelings</p>
            </div>
          </div>
          <div className="shareButton">
            <button type="submit">Share</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SharePost;
