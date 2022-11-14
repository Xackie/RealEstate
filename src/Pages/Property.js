import React,{useState} from "react";

function Property({ propertyList }) {
  const [selectedId, setSelectedId] = useState([]);
console.log((selectedId))

const selectHandle=(e)=>{
setSelectedId(e.target.value);
};
// const getUnqueValues=(array)=>(
//   [...new Set(array)]
// );
  return (<>
  
       <form >
      <label htmlFor="location" >Choose a location:</label>
      <select name="ids" id="ids" onChange={selectHandle}>
        { propertyList.map((e, index) => {
          return (
            <option key={index} >
              {e.location.address.city}
            </option>
          );
        })}
      </select>
    </form>
   <div className="cards" >

      {!propertyList
        ? null
        : propertyList.filter((value)=>{   
          return(value.location.address.city)===(selectedId)
        }).map((e, index) => {
              return (
                <>
                  <div className="card" key={index}>
                    <img
                      className="image"
                      src={e.primary_photo.href}
                      alt={index}
                      style={{ width: "100%" }}
                    />

                    <div className="container">
                      <span style={{ color: "blue" }}>
                        ${e.list_price?e.list_price:"NA"}
                        <span style={{ color: "grey", fontSize: "small" }}>
                          /Month
                        </span>
                      </span>

                      <span style={{ fontWeight: "bold", paddingTop: "5px" }}>
                        {e.location.address.city}
                      </span>
                      <span
                        style={{
                          color: "grey",
                          fontSize: "small",
                          paddingTop: "5px",
                        }}
                      >
                        {e.location.address.line}
                      </span>
                      <div
                        className="description"
                        style={{ paddingTop: "10px" }}
                      >
                        <span>{e.description.beds?e.description.beds:"NA"} Beds |</span>
                        <span>{e.description.baths?e.description.baths:"NA"} Bathrooms |</span>
                        <span>{e.description.sqft?e.description.sqft:"NA"} sqft</span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
    </div>
  </>
  );
}

export default Property
