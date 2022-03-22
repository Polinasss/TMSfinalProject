import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Civilization() {
  const [items, setItems] = useState([]);
  let history = useHistory();

  const handleHistory = () => {
    history.push('/');
  }

  const fetchCivilizationsList = async () => {
    const data = await fetch('https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
    const items = await data.json();
    setItems(items.civilizations);
    console.log(items.civilizations);
  }

  useEffect(() => {
    fetchCivilizationsList();
  },[]);
  
  return (
    <div>
      <h1>Civilizations List Page</h1>
      <button onClick={handleHistory}>Back with History</button>
      <ul>
      {items.map(item => (
          <Link key={item.id} to={`/Civilization/${item.id}`}>
            <li>{item.name}</li>  
          </Link>
      ))}
      </ul>
    </div>
  );
}
export default Civilization;