import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const UniqueUnit = ({url}) => {
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
        <p>created_in: <a href={`${post.created_in}`}>{post.created_in}</a></p>
        <p>cost:</p>
        <ul>
          <li>Food = {post.cost.Food}</li>
          <li>Gold = {post.cost.Gold}</li>
        </ul>
        <p>build_time: {post.build_time}</p>
        <p>reload_time: {post.reload_time}</p>
        <p>movement_rate: {post.movement_rate}</p>
        <p>line_of_sight: {post.line_of_sight}</p>
        <p>hit_points: {post.hit_points}</p>
        <p>attack: {post.attack}</p>
        <p>armor: {post.armor}</p>
        <p>attack_bonus:</p>
        <ul>
          {post.attack_bonus.map( attack_bonus_item => (
            <li key={attack_bonus_item}>{attack_bonus_item}</li>
          ))}
        </ul>
        <button onClick={() => history.goBack()}>Back with History</button>
      </div>
    )}
  </div>
  );
};

export {UniqueUnit};