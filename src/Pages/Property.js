import React from 'react'

function Property({propertyList}) {
  
  return (
    <div  className="cards" style={{border:"1px solid red"}}>

{!propertyList
        ? null
        : propertyList.map((e, index) => {
            return (
              
              <> 
                <div className='card'  style={{border:"1px solid blue"}}>
                  <img key="{index}" className="image"  src={e.primary_photo.href} alt={index} style={{width:"100%"}} />
               
                <div className='container'>
                <span style={{color:"blue"}}>${e.list_price}<span style={{color:'grey', fontSize:"small"}}>/Month</span></span>

               <span style={{fontWeight: "bold" ,paddingTop:"5px"}}>{e.location.address.city}</span>
                <span style={{color:"grey", fontSize:"small",paddingTop:"5px"}}>{e.location.address.line}</span> 
<div className='description' style={{paddingTop:"10px"}}>
  <span>{e.description.beds} Beds</span>
  <span>{e.description.baths} Bathrooms</span>
  <span>{e.description.sqft} sqft</span>
  </div>
                </div>
                </div>
              </>
            );
          })}
  
</div>
  )
        }
export default Property