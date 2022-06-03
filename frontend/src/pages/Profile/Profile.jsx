import { useState, useEffect } from "react";
import Feed from "../../components/Feed/Feed";
import Navbar from "../../components/Navbar/Navbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Profile.scss";
import axios from "axios";
import { useParams } from "react-router";

const Profile = () => {
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const username = useParams().username;

  useEffect(() => {
    const fetcUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetcUser();
    console.log("profile - ", user);
  }, [username]);
  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src=" https://images.unsplash.com/photo-1437435409766-a478cc6da81a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80      "
                alt=""
              />
              <img
                className="profileUserImg"
                src={PF + user.profilePic}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName"> {user.username}</h4>
              <span className="profileInfoDesc"> {user.email} </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
