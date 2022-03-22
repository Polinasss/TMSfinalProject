import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const PersonalInfo = () => {
  const { id } = useParams();
  const [post, setPost]= useState(null);
  
    useEffect (()=>{
      fetch('https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
      .then(res => res.json())
      .then(data => setPost(data.civilizations[id - 1]));
    }, [id]);

    let history = useHistory();
    console.log({id});

  return (
    <div> 
      {post && (
        <div>
          <h1>{post.name}</h1>
          <p>id: {post.id}</p>
          <p>expansion: {post.expansion}</p>
          <p>team_bonus: {post.team_bonus}</p>
          <p>civilization_bonus:</p>
          <ul>
            {post.civilization_bonus.map( (civilization_bonus_item) => (
              <li key={civilization_bonus_item}>{civilization_bonus_item}</li>
            ))}
          </ul>
          <button onClick={() => history.goBack()}>Back with History</button>
        </div>
      )}
    </div>
  );
};