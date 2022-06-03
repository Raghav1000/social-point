import React from "react";
import "./Rightbar.scss";
import { GoPrimitiveDot } from "react-icons/go";
import { Users } from "../../DummyData";

const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log("rightbar - ", user);

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdays">
          <h3>Birthdays</h3>
          <div className="birthday__container">
            <img src={PF + "gift.png"} alt="" />
            <span>
              <b> John doe</b> and <b>2 more</b> friends have birthdays today.
            </span>
          </div>
        </div>
        <div className="newsFeed">
          <h3>News feed</h3>
          <div className="newsFeed__section">
            <img src={PF + "news-feed-2.jpg"} alt="" />
            <div className="newsFeed__details">
              <h5>The UK video games market is worth a record £7.16bn</h5>
            </div>
          </div>
          <div className="newsFeed__section">
            <img src={PF + "news-feed-1.jpg"} alt="" />
            <div className="newsFeed__details">
              <h5>Russia considers accepting Bitcoin for oil and gas</h5>
            </div>
          </div>
        </div>
        <div className="onlineFriends">
          <h3>Online Friends</h3>
          {Users.map((user) => (
            <div className="person__info">
              <img src={PF + user.profilePicture} alt="" />
              <GoPrimitiveDot className="dot" fill="#00ff00" size="20px" />
              <h4>{user.username}</h4>
            </div>
          ))}
        </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <div className="profile__right__bar">
          <h3>User Information</h3>
          <h5>
            City : <b> {user.city}</b>
          </h5>
          <h5>
            Relationship : <b> {user.relationship}</b>
          </h5>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbar__container">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
