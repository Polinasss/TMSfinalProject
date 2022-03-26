import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; //as = буду использовать под именем

import { PrivateRoute } from "./components/PrivateRoute";
import { AuthContextProvider } from "./components/context/AuthContextProvider";

import { Footer, StyledNavigation, WelcomePage, StyledLink} from "./styles";
import { GlobalStyle } from "./styles";

import SignIn from "./components/Sign in";
import SignUp from "./components/Sign up";

import Civilization from "./components/pages/Civilization";
import { CivilizationInfo } from "./components/pages/CivilizationInfo";

import {Structures} from './components/pages/Structures';

import {Technologies} from './components/pages/Technologies';

import Units from './components/pages/Units';
import UnitsInfo from './components/pages/UnitsInfo';

const App = () => {
  
  return (
    <AuthContextProvider>
      <Router> 
        <GlobalStyle/>        
          <Switch>   
            <Route path="/Sign in" exact component={SignIn} />
            <Route path="/Sign up" exact component={SignUp} />
            <Route>

              <nav style={StyledNavigation}>
                <Link to='/Structures'> Structures</Link>
                <Link to='/Technologies'> Technologies</Link>
                <Link to='/Units'> Units</Link>
                <Link to='/Civilization'>Civilization</Link>
              </nav>
            </Route>
           </Switch>

           <Switch>
            <WelcomePage exact path='/'>Welcome to the <br></br> Age of Empires<p><Link style={StyledLink} to='/Sign in'>Log out</Link></p></WelcomePage>
            <PrivateRoute exact path='/Civilization' component={Civilization}/>
            <PrivateRoute exact path='/Civilization/:id' component={CivilizationInfo}/> 

            <PrivateRoute exact path='/Structures' component={Structures}/>

            <PrivateRoute exact path='/Technologies' component={Technologies}/>

            <PrivateRoute exact path='/Units' component={Units}/>
            <PrivateRoute exact path='/Units/:id'component={UnitsInfo}/>
          </Switch>

          <Footer>
            <p>Gushcha Polina</p><p>21.03.2022</p>
          </Footer>
      </Router>
    </AuthContextProvider>
  );
};
export default App;
