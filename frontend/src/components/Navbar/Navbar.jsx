import React, { useContext } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { BsFillPersonFill } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user } = useContext(AuthContext);
  console.log(user.profilePic);
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__left">
          <Link to="/">
            <h3> Social point </h3>
          </Link>
        </div>

        <div className="navbar__center">
          <input type="text" placeholder="Search your friends" />
        </div>

        <div className="navbar__right">
          <div className="navbar__right__links">
            <a>Home</a>
            <a>Timeline</a>
          </div>
          <div className="navbar__right__icons">
            <BsFillPersonFill fill="white" size="24px" />
            <MdMessage fill="white" size="24px" />
            <IoIosNotifications fill="white" size="24px" />
          </div>
          <Link to={`/profile/${user.username}`}>
            <div className="navbar__profile__image">
              <img src={PF + user.profilePic} alt="profile-img" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
