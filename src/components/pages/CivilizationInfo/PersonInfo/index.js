import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledButton, StyledCivilizations, StyledListLi, StyledShortList } from "../../../../styles";
import Preloader from "../../../AdditionalPages/Preloader";


export const PersonalInfo = () => {
  const { id } = useParams();
  const [post, setPost]= useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCivilizationsList = async () => {
    const data = await fetch(`https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`);
    const items = await data.json();
    setPost(items.civilizations[id - 1]);
    setLoading(true);
  }

    useEffect (()=>{
      fetchCivilizationsList();
    }, [id]);

    let history = useHistory();
    console.log({id});
    console.log (loading);

  return (
    <div>
      {loading ? (
    <div style={StyledCivilizations}> 
      {post && (
        <div>
          <h1>{post.name}</h1>
          <p>id: {post.id}</p>
          <p>expansion: {post.expansion}</p>
          <p>team bonus: {post.team_bonus}</p>
          <h3><i>civilization bonus:</i></h3>
          <ul style={StyledShortList}>
            {post.civilization_bonus.map( (civilization_bonus_item) => (
              <li style={StyledListLi} key={civilization_bonus_item}>{civilization_bonus_item}</li>
            ))}
          </ul>
          <StyledButton onClick={() => history.goBack()}>Back with History</StyledButton>
        </div>
        )}
    </div>) : <Preloader/>}
    </div>
  );
};