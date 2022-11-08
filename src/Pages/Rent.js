import React, { useEffect, useState } from "react";
import axios from "axios";
// import {baseUrl,fetchApi} from '../Configuration/Api'
import Property from "./Property";

function Rent() {
  const [propertyList, setPropertList] = useState([]);
  const fetchProperty = async () => {
    const { data } = await axios.get(
      "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=3",
      {
        headers: {
          "X-RapidAPI-Key":
            "143d4f8e32mshdfa797f7c5d8a54p1af0f0jsn51c2684c0569",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      }
    );
    setPropertList(data.hits);
  };

  console.log(propertyList);
  useEffect(() => {
    fetchProperty();
  }, []);

  const coverPicture = propertyList.map((item) => {
    return <img className="img" key={item.id} src={item.coverPhoto.url} alt={item.price} />;
  });

  return (
    
    <div className="Rentpage" style={{ border: "1px solid red" }}>
      {/* <div
        style={{
          height: "50px",
          fontFamily: "sans-serif",
          fontWeight: 500,
          fontSize: 30,
        }}
      >
        Search properties to rent
      </div>
      <div style={{ border: "1px solid black", height: "50px" }}>Filters</div> */}

      <div className="properties">
         <Property coverPicture={coverPicture}/>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Rent;


