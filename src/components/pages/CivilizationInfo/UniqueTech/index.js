import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const UniqueTech = ({url}) => {
  const { id } = useParams();
  const [post, setPost]= useState(null);
  let history = useHistory();

  useEffect (()=>{
    fetch(`https://thingproxy.freeboard.io/fetch/${url}`)
    .then(res => res.json())
    .then(data => setPost(data));
  }, [id]);
  
  return (
    <div>
    {post && (
      <div>
        <p>id: {post.id}</p>
        <p>name: {post.name}</p>
        <p>description: {post.description}</p>
        <p>expansion: {post.expansion}</p>
        <p>age: {post.age}</p>
        <p>develops_in: <a href={`${post.develops_in}`}>{post.develops_in}</a></p>
        <p>cost:</p>
        <ul>
          <li>Food = {post.cost.Food}</li>
          <li>Gold = {post.cost.Gold}</li>
        </ul>
        <p>build_time: {post.build_time}</p>
        <p>applies_to: <a href={`${post.applies_to[0]}`}>{post.applies_to[0]}</a></p>
        <button onClick={() => history.goBack()}>Back with History</button>
      </div>
    )}
  </div>
  );
};

export {UniqueTech};
