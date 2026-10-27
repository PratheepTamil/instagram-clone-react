import axios from "axios";
import React, { useEffect, useState } from "react";

function Suggestion() {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("http://instagram-clone-react-rabt.onrender.com/profile")
      .then((data) => data.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log(err));

    fetch("http://instagram-clone-react-rabt.onrender.com/suggestions")
      .then((data) => data.json())
      .then((data) => setSuggestions(data))
      .catch((err) => console.log(err));
  }, []);


  const handleFollow =async (id, username) => {
    axios.post('http://instagram-clone-react-rabt.onrender.com/followers',{"id" : id, "username" : username})
    .then(alert('Followed'))
    .catch(err => console.log(err));
  }
  return (
    <div>
      <div className="suggestion w-75 m-5">
        {profile ? (
          <div className="d-flex ">
            <img
              className="dp rounded-circle"
              src={profile.profileImage}
              alt="Porfile pic"
            />
            <h5 className="username">{profile.username}</h5>
            <small className="switch ms-auto text-primary">Switch</small>
          </div>
        ) : (
          <p>Loading ...</p>
        )}

        <div className="d-flex justify-content-between mt-5">
          <h6>Suggested for you</h6>
          <b>see all</b>
        </div>

        {suggestions.length > 0 ? (
          <div>
            {suggestions.map((suggestion) => (
              <div className="mt-3" key={suggestion.id}>
                <div className="d-flex justify-content-between">
                  <div className="d-flex  ">
                    <img
                      className="dp rounded-circle"
                      src={suggestion.profileImage}
                      alt="Porfile pic"
                    />
                    <h2 className="username">{suggestion.username}</h2>
                  </div>
                  <div className="text-primary">
                    <a className="text-primary mx-auto" onClick={() => {handleFollow(suggestion.id, suggestion.username)}}>Follow</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Suggestion;
