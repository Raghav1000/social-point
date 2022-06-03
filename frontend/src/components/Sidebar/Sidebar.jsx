import React from "react";
import "./Sidebar.scss";
import { MdRssFeed } from "react-icons/md";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { BsBookmarksFill } from "react-icons/bs";
import { Users } from "../../DummyData";

const Sidebar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__menu">
          <div className="menu__option">
            <MdRssFeed fill="rgb(145, 145, 145)" size="24px" />
            <h5>Feeds</h5>
          </div>
          <div className="menu__option">
            <BsFillPersonCheckFill fill="rgb(145, 145, 145)" size="24px" />
            <h5>Friends</h5>
          </div>
          <div className="menu__option">
            <FaUserFriends fill="rgb(145, 145, 145)" size="24px" />
            <h5>Groups</h5>
          </div>
          <div className="menu__option">
            <BsFillCalendarEventFill fill="rgb(145, 145, 145)" size="20px" />
            <h5>Events</h5>
          </div>
          <div className="menu__option">
            <MdPhotoSizeSelectActual fill="rgb(145, 145, 145)" size="24px" />
            <h5>Photos</h5>
          </div>
          <div className="menu__option">
            <SiApplemusic fill="rgb(145, 145, 145)" size="20px" />
            <h5>Music</h5>
          </div>
          <div className="menu__option">
            <FaVideo fill="rgb(145, 145, 145)" size="21px" />
            <h5>Videos</h5>
          </div>
          <div className="menu__option">
            <BsBookmarksFill fill="rgb(145, 145, 145)" size="21px" />
            <h5>Bookmarks</h5>
          </div>
        </div>
        <div className="separator"></div>
        <div className="sidebar__friendList">
          <h3>Friend List</h3>
          {Users.map((user) => (
            <div className="person__info">
              <img src={PF + user.profilePicture} alt="" />
              <h4>{user.username}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
