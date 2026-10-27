import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Stories() {
  const [stories, setStories] = useState([]);
 const navigate = useNavigate();

 let tot = 0;
  useEffect(() => {
    fetch("http://instagram-clone-react-rabt.onrender.com/stories")
      .then((data) => data.json())
      .then((data) => setStories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="story d-flex gap-3 m-4">
      <div className="d-none">
      {tot=stories.length}
      </div>
      {stories.length > 0 ? (
        stories.map((story) => (
          <div key={story.id} onClick={() => (navigate(`/story/${story.id}/${tot}`))}>
            <div className="gradient-border">
              <div className="gradient-border-2">
                <img
                  src={story.profileImage}
                  alt="dp"
                  className="story-dp rounded-circle  "
                />
              </div>
            </div>
            <h5
              className=" user-name text-truncate mt-1"
              style={{ width: "50px" }}
            >
              {story.username}
            </h5>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Stories;
