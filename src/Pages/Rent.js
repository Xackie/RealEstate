import React, { useEffect, useState } from "react";
import axios from "axios";
// import {baseUrl,fetchApi} from '../Configuration/Api'
import Property from "./Property";
// import Filters from "../Components/Filters";

function Rent() {
  const [propertyList, setPropertList] = useState([]);
  const fetchProperty = async () => {
    const { data } = await axios.get(
      'https://real-estate12.p.rapidapi.com/listings/rent?state="CA"&city="Los Angeles"&page=1',
      {
        params: { state: "CA", city: "Los Angeles", page: "1" },
        headers: {
          "X-RapidAPI-Key":
            "ecdda23cd8msh2c6ca1e57fb51adp111b6ejsn4bdf5d4f63cc",
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
    <div className="properties" >
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
  

       <Property propertyList={propertyList} />
    </div>
  );
}

export default Rent;
