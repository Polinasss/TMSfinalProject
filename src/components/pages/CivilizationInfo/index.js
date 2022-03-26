import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { PersonalInfo } from "./PersonInfo";
import { UniqueUnit } from "./UniqueUnit";
import { UniqueTech } from "./UniqueTech";
import { StyledLink, StyledUniqNavigation } from "../../../styles";
import Preloader from "../../AdditionalPages/Preloader";

export const CivilizationInfo = () => {
  const [post, setPost]= useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  console.log({id});

  const fetchCivilizationsList = async () => {
    const data = await fetch(`https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`);
    const items = await data.json();
    setPost(items.civilizations[id - 1]);
    setLoading(true);
  }

  useEffect (()=>{
    fetchCivilizationsList();
  }, [id]);
  console.log (loading);

  return (
    <Router>
      {loading ? (
        <div>
      {post && 
      <div key={post.id}>
        <div>
          <nav style={StyledUniqNavigation}>           
            <Link style={StyledLink} to={`/Civilization/${post.id}/UniqueUnit`}>UniqueUnit</Link>
            <Link style={StyledLink} to={`/Civilization/${post.id}/UniqueTech`}>UniqueTech</Link>
          </nav>
        </div>
          <Switch>
                <Route exact path='/Civilization/:id'><PersonalInfo/></Route>
                <Route exact path='/Civilization/:id/UniqueUnit'><UniqueUnit url={post.unique_unit}/></Route>
                <Route exact path='/Civilization/:id/UniqueTech'><UniqueTech url={post.unique_tech}/></Route>
          </Switch>
           </div>
        }
        </div>
      ) : <Preloader/>}
    </Router>
  )
};