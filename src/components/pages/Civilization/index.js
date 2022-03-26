import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Preloader from "../../AdditionalPages/Preloader";
import { StyledList, StyledCivilizations, StyledListLi, StyledButton } from "../../../styles";

function Civilization() {
  const [items, setItems] = useState([]);
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  
  const handleHistory = () => {
    history.push('/');
  }

  const fetchCivilizationsList = async () => {
    const data = await fetch('https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
    const items = await data.json();
    setItems(items.civilizations);
    setLoading(true);
  }

  useEffect(() => {
    fetchCivilizationsList();
  },[]);

  console.log(items.civilizations);
  console.log (loading);
  
  return (
    <div>
      { loading ?
      (<div style={StyledCivilizations}>
      <h1>Civilizations List Page</h1>
      <StyledButton onClick={handleHistory}>Back with History</StyledButton>
      <ul style={StyledList}>
      {items.map(item => (
          <Link key={item.id} to={`/Civilization/${item.id}`}>
            <li style={StyledListLi}>{item.name}</li>  
          </Link>
      ))}
      </ul>
      </div>): <Preloader/>}
    </div>
  );
}
export default Civilization;