import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((data) => data.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div className="mt-5" key={post.id}>
              {/* {post.id} */}
              <div className="d-flex  ">
                <img
                  className="dp rounded-circle"
                  src={post.profileImage}
                  alt="Porfile pic"
                />
                <h2 className="username">{post.username}</h2>
              </div>
              <h4 className="location">{post.location}</h4>
              <img className="post rounded-2" src={post.postImage} alt="" />
              <div className="d-flex  gap-2">
                <div>
                  <i className="bi bi-heart"></i>
                  <span>{post.likes}</span>
                </div>
                <div>
                  <i className="bi bi-chat"></i>
                  <span>{post.comments}</span>
                </div>
                <i className="bi bi-repeat"></i>
                <i className="bi bi-send"></i>
              </div>
              <div>{post.caption}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Posts;
