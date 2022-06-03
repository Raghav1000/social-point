import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "./Feed.scss";
import Post from "./Post";
import SharePost from "./SharePost";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";

const Feed = ({ username }) => {
  const { user } = useContext(AuthContext);
  // console.log("From feed ", username);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.created_at) - new Date(p1.created_at);
        })
      );
    };

    fetchPosts();
  }, [username, user._id]);
  return (
    <div className="feed">
      <div className="feed__container">
        {(!username || username === user.username) && <SharePost />}
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
