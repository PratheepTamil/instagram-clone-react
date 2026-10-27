import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState(null);

  const [followers, setFollowers] = useState([]);

  const [unfolloewd, setUnFolloewd] = useState(0);

  useEffect(() => {
    axios
      .get("http://instagram-clone-react-rabt.onrender.com/profile")
      .then((data) => setProfile(data.data))
      .catch((err) => console.log(err));

    axios
      .get("http://instagram-clone-react-rabt.onrender.com/followers")
      .then((data) => setFollowers(data.data))
      .then(setUnFolloewd(!unfolloewd))
      .catch((err) => console.log(err));
  }, [unfolloewd]);

  function handleOnChange(e) {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  const handleUpdate = async () => {
    axios
      .put("http://instagram-clone-react-rabt.onrender.com/profile", profile)
      .then(console.log("Updated"))
      .catch((err) => console.log(err));
  };

  const handleUnFollow = async (id) => {
    axios
      .delete(`http://instagram-clone-react-rabt.onrender.com/followers/${id}`)
      .then(alert("un folloe"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="m-5">
      {profile ? (
        <div className="">
          <div className="d-flex">
            <div>
              <img
                src={profile.profileImage}
                alt="profile pic"
                className="profile rounded-circle"
              />
              <h5>{profile.username}</h5>
            </div>
            <div className="d-flex my-5 mx-5 gap-3">
              <h6>{profile.postsCount}   <small className="text-secondary">Post</small></h6>
              <h6>{profile.followers}    <small className="text-secondary">Followers</small></h6>
              <h6>{profile.following}    <small className="text-secondary">Following</small></h6>
            </div>
          </div>

          <input
            type="text"
            value={profile.username}
            name="username"
            className="form-control my-4"
            onChange={handleOnChange}
          />
          <input
            type="text"
            value={profile.profileImage}
            name="profileImage"
            className="form-control"
            onChange={handleOnChange}
          />

          <button onClick={handleUpdate} className="btn btn-primary my-4">
            update
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      {followers.length > 0 ? (
        followers.map((follower) => (
          <div
            className="d-flex my-2 justify-content-between align-items-center"
            key={follower.id}
          >
            <span>{follower.username}</span>
            <button
              onClick={() => handleUnFollow(follower.id)}
              className="btn btn-danger"
            >
              Unfollow
            </button>
          </div>
        ))
      ) : (
        <div>Loading..</div>
      )}
    </div>
  );
}

export default Profile;
