import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://instagram-clone-react-rabt.onrender.com";

function Profile() {
const [profile, setProfile] = useState(null);
const [followers, setFollowers] = useState([]);

useEffect(() => {
axios
.get(`${API}/profile`)
.then((response) => setProfile(response.data))
.catch((err) => console.log("Profile fetch error:", err));

fetchFollowers();

}, []);

function fetchFollowers() {
axios
.get(`${API}/followers`)
.then((response) => setFollowers(response.data))
.catch((err) => console.log("Followers fetch error:", err));
}

function handleOnChange(e) {
setProfile((prev) => ({
...prev,
[e.target.name]: e.target.value,
}));
}

async function handleUpdate() {
try {
const response = await axios.put(`${API}/profile`, profile);
setProfile(response.data);
alert("Profile updated successfully!");
} catch (err) {
console.log("Profile update error:", err);
alert("Profile update failed!");
}
}

async function handleUnFollow(id) {
try {
await axios.delete(`${API}/followers/${id}`);
setFollowers((prev) =>
prev.filter((follower) => String(follower.id) !== String(id))
);
alert("Unfollowed successfully!");
} catch (err) {
console.log("Unfollow error:", err);
alert("Unfollow failed!");
}
}

return ( <div className="m-5">
{profile ? ( <div> <div className="d-flex"> <div> <img
             src={profile.profileImage}
             alt="Profile"
             className="profile rounded-circle"
           /> <h5>{profile.username}</h5> </div>

```
        <div className="d-flex my-5 mx-5 gap-3">
          <h6>
            {profile.postsCount}{" "}
            <small className="text-secondary">Posts</small>
          </h6>

          <h6>
            {profile.followers}{" "}
            <small className="text-secondary">Followers</small>
          </h6>

          <h6>
            {profile.following}{" "}
            <small className="text-secondary">Following</small>
          </h6>
        </div>
      </div>

      <input
        type="text"
        value={profile.username || ""}
        name="username"
        className="form-control my-4"
        onChange={handleOnChange}
      />

      <input
        type="text"
        value={profile.profileImage || ""}
        name="profileImage"
        className="form-control"
        onChange={handleOnChange}
      />

      <button
        onClick={handleUpdate}
        className="btn btn-primary my-4"
      >
        Update
      </button>
    </div>
  ) : (
    <div>Loading profile...</div>
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
    <div>No followers found.</div>
  )}
</div>

);
}

export default Profile;























// import { useEffect, useState } from "react";
// import axios from "axios";

// function Profile() {
//   const [profile, setProfile] = useState(null);

//   const [followers, setFollowers] = useState([]);

//   const [unfolloewd, setUnFolloewd] = useState(0);

//   useEffect(() => {
//     axios
//       .get("https://instagram-clone-react-rabt.onrender.com/profile")
//       .then((data) => setProfile(data.data))
//       .catch((err) => console.log(err));

//     axios
//       .get("https://instagram-clone-react-rabt.onrender.com/followers")
//       .then((data) => setFollowers(data.data))
//       .then(setUnFolloewd(!unfolloewd))
//       .catch((err) => console.log(err));
//   }, [unfolloewd]);

//   function handleOnChange(e) {
//     setProfile((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   }
//   const handleUpdate = async () => {
//     axios
//       .put("https://instagram-clone-react-rabt.onrender.com/profile", profile)
//       .then(console.log("Updated"))
//       .catch((err) => console.log(err));
//   };

//   const handleUnFollow = async (id) => {
//     axios
//       .delete(`https://instagram-clone-react-rabt.onrender.com/followers/${id}`)
//       .then(alert("un folloe"))
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="m-5">
//       {profile ? (
//         <div className="">
//           <div className="d-flex">
//             <div>
//               <img
//                 src={profile.profileImage}
//                 alt="profile pic"
//                 className="profile rounded-circle"
//               />
//               <h5>{profile.username}</h5>
//             </div>
//             <div className="d-flex my-5 mx-5 gap-3">
//               <h6>{profile.postsCount}   <small className="text-secondary">Post</small></h6>
//               <h6>{profile.followers}    <small className="text-secondary">Followers</small></h6>
//               <h6>{profile.following}    <small className="text-secondary">Following</small></h6>
//             </div>
//           </div>

//           <input
//             type="text"
//             value={profile.username}
//             name="username"
//             className="form-control my-4"
//             onChange={handleOnChange}
//           />
//           <input
//             type="text"
//             value={profile.profileImage}
//             name="profileImage"
//             className="form-control"
//             onChange={handleOnChange}
//           />

//           <button onClick={handleUpdate} className="btn btn-primary my-4">
//             update
//           </button>
//         </div>
//       ) : (
//         <div>Loading...</div>
//       )}

//       {followers.length > 0 ? (
//         followers.map((follower) => (
//           <div
//             className="d-flex my-2 justify-content-between align-items-center"
//             key={follower.id}
//           >
//             <span>{follower.username}</span>
//             <button
//               onClick={() => handleUnFollow(follower.id)}
//               className="btn btn-danger"
//             >
//               Unfollow
//             </button>
//           </div>
//         ))
//       ) : (
//         <div>Loading..</div>
//       )}
//     </div>
//   );
// }

// export default Profile;
