import React from "react";
import "./Post.scss";
import { FcLike } from "react-icons/fc";
import { Users } from "../../DummyData";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Post = ({ post }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // console.log(post);
  const [likes, setLikes] = useState(post.likes.length);
  const [isliked, setisLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setisLiked(!isliked);
    isliked ? setLikes(likes - 1) : setLikes(likes + 1);
  };

  return (
    <div className="post">
      <div className="post__container">
        <div className="post__detail">
          <img src={PF + user.profilePic} alt="img" />
          <Link to={`/profile/${user.username}`}>
            <div className="profileDetails">
              <h5>{user.username}</h5>
            </div>
          </Link>
        </div>
        <div className="post__description">
          <h6>{post.desc}</h6>
        </div>
        <div className="post__img">
          <img src={PF + post.img} alt="post" />
        </div>
        <div className="post__interaction">
          <div className="post_interaction">
            <div className="likes">
              <FcLike onClick={likeHandler} size="24px" />
              <p>{likes} people has liked this</p>
            </div>
            <div className="share">
              <p>{post.comment} comments</p>
              <p> {post.share} shares</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
