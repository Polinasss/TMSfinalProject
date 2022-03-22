import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UnitsInfo({match}) {
  useEffect(() => {
    fetchUnits();
    console.log(match);
  },[]);
  
  const [item, setItem] = useState({});

  const fetchUnits = async () => {
    const fetchUnit = await fetch(`https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/structure/castle`);
    const item = await fetchUnit.json();
    console.log(item);
  }
  
  return (
    <div>
      <h1>Unit One Page</h1>
    </div>
  );
}
export default UnitsInfo;