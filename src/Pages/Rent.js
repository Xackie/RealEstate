import React, { useEffect, useState } from "react";
import axios from "axios";
// import {baseUrl,fetchApi} from '../Configuration/Api'
import Property from "./Property";
import "./../App.css";

function Rent() {
  const [propertyList, setPropertList] = useState([]);
  const fetchProperty = async () => {
    const { data } = await axios.get(
      'https://real-estate12.p.rapidapi.com/listings/rent?state="CA"&city="Los Angeles"&page=1',
      {
        params: { state: "CA", city: "Los Angeles", page: "1" },
        headers: {
          "X-RapidAPI-Key":
            "b77459cf98mshe2c9c6f1732745bp14dc57jsn64a808f72ec3",
          "X-RapidAPI-Host": "real-estate12.p.rapidapi.com",
        },
      }
    );
    setPropertList(data.properties);
  };

  useEffect(() => {
  fetchProperty();
  }, []);
  console.log(propertyList);

  return (
    <div className="properties" style={{ border: "1px solid black" }}>
      <div
        style={{
          height: "50px",
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: 30,
        }}
      >
        Search properties to rent
      </div>
      <div style={{ border: "1px solid black", height: "50px" }}>Filters</div>
     
          <Property propertyList={propertyList} />
    </div>
  );
}

export default Rent;
