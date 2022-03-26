import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { StyledCivilizations, StyledShortList, StyledButton } from "../../../../styles";
import Preloader from "../../../AdditionalPages/Preloader";
import { Link } from "react-router-dom";

const UniqueTech = ({url}) => {
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
  console.log({id});
  
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
        <p>develops_in: <a href={`${post.develops_in}`}>{post.develops_in}</a></p>
        <p>cost:</p>
        <ul style={StyledShortList}>
          <li>Food = {post.cost.Food}</li>
          <li>Gold = {post.cost.Gold}</li>
        </ul>
        <p>build_time: {post.build_time}</p>
        <p>applies_to: <a href={`${post.applies_to[0]}`}>{post.applies_to[0]}</a></p>
        
        <StyledButton onClick={() => history.goBack()}>Back with History</StyledButton>
      </div>
    )}
  </div>): <Preloader/>}
  </div>
  );
};

export {UniqueTech};
