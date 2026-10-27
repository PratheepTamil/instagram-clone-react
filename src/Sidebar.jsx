import React from "react";
import { useNavigate } from "react-router-dom";
import instaText from "./assets/insta-text.png";
function Sidebar() {

  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex flex-column position-fixed gap-5 m-3 fw-medium">
        <div className="mt-2">
          <img
            className="logo-text"
            src={instaText}
            alt="Instagram text"
          />
        </div>
        <div className="d-flex flex-column gap-4 ">
          <div>
            <i className="bi bi-house"></i>Home
          </div>
          <div>
            <i className="bi bi-search"></i>Search
          </div>
          <div>
            <i className="bi bi-compass"></i>Explore
          </div>
          <div>
            <i className="bi bi-play-btn"></i>Reels
          </div>
          <div>
            <i className="bi bi-chat-dots"></i>Messages
          </div>
          <div>
            <i className="bi bi-suit-heart"></i>Notification
          </div>
          <div>
            <i className="bi bi-plus-lg"></i>Create
          </div>
          <div onClick={() => {navigate('/profile')}}>
            <i className="bi bi-person-circle"></i>Profile
          </div>
        </div>
        <div className="position-fixed bottom-0 d-flex flex-column gap-3 mb-3">
          <div>
            <i className="bi bi-threads"></i>Threads
          </div>
          <div>
            <i className="bi bi-list"></i>More
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
