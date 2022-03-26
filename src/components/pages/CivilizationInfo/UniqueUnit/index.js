import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Preloader from "../../../AdditionalPages/Preloader";
import { StyledCivilizations, StyledShortList, StyledButton } from "../../../../styles";

const UniqueUnit = ({url}) => {
  const { id } = useParams();
  const [post, setPost]= useState(null);
  let history = useHistory();

  const [loading, setLoading] = useState(false);

  const fetchCivilizationsList = async () => {
    const data = await fetch(`https://thingproxy.freeboard.io/fetch/${url}`);
    const items = await data.json();
    setPost(items);
    setLoading(true);
  }

  useEffect (()=>{
    fetchCivilizationsList();
  }, [id]);
  
  return (
    <div>
      {loading ? (
    <div>
    {post && (
      <div style={StyledCivilizations}>
        <p>id: {post.id}</p>
        <p>name: {post.name}</p>
        <p>description: {post.description}</p>
        <p>expansion: {post.expansion}</p>
        <p>age: {post.age}</p>
        <p>created_in: <a href={`${post.created_in}`}>{post.created_in}</a></p>
        <p>cost:</p>
        <ul style={StyledShortList}>
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
        <StyledButton onClick={() => history.goBack()}>Back with History</StyledButton>
      </div>
    )}
  </div>) : <Preloader/>}
  </div>
  );
};

export {UniqueUnit};