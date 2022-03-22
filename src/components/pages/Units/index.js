import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Units() {
  const [items, setItems] = useState([]);

  const fetchUnits = async () => {
    const data = await fetch('https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/units');
    const items = await data.json();
    console.log(items.units);
    setItems(items.units);
  }

  useEffect(() => {
    fetchUnits();
  },[]);
  
  return (
    <div>
      <h1>Units Page</h1>
      <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name}
          <Link to={`/Units/${item.id}`}><button>See more...</button></Link>
        </li>
      ))}
      </ul>
    </div>
  );
}
export default Units;