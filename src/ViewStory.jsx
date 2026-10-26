import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
import Stories from "./Stories";

function ViewStory() {
  const { id, tot } = useParams();

  const [story, setStory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/stories/${id}`)
      .then((data) => data.json())
      .then((data) => setStory(data))
      .catch((err) => console.log(err));
  }, [id]);

  if(Number(id) > Number(tot)){
    navigate('/');
  }


  return <div>{story ?
    <div className="d-flex justify-content-center  vh-100 p-3 ">
        <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`} className="d-flex align-items-center"><i className="bi bi-arrow-left-circle-fill"></i></Link>
        <img className="rounded-3 story-image" src={story.storyImage}  alt="Story Image" />
        <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`} className="d-flex align-items-center mx-2 "><i className="bi bi-arrow-right-circle-fill"></i></Link>
    </div>
    :
    <p>Loading...</p>}
    </div>;
}

export default ViewStory;
