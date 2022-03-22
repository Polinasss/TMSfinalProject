import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { PersonalInfo } from "./PersonInfo";
import { UniqueUnit } from "./UniqueUnit";
import { UniqueTech } from "./UniqueTech";

export const CivilizationInfo = () => {
  const [post, setPost]= useState(null);
  const { id } = useParams();
  console.log({id});

  useEffect (()=>{
    fetch('https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
    .then(res => res.json())
    .then(data => setPost(data.civilizations[id - 1]));
  }, [id]);

  return (
    <Router>
      {post && (
        <div key={post.id}>
          <nav>           
            <Link to={`/Civilization/${post.id}/UniqueUnit`}>UniqueUnit</Link>
            <Link to={`/Civilization/${post.id}/UniqueTech`}>UniqueTech</Link>
          </nav>
          <Switch>
                <Route exact path='/Civilization/:id'><PersonalInfo/></Route>
                <Route exact path='/Civilization/:id/UniqueUnit'><UniqueUnit url={post.unique_unit}/></Route>
                <Route exact path='/Civilization/:id/UniqueTech'><UniqueTech url={post.unique_tech}/></Route>
          </Switch>
        </div>
      )}
    </Router>
  )
};