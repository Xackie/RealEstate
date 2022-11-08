import React from 'react'

function Property({coverPicture}) {
  return (
    <div >
        {coverPicture}
        {/* <span className="rentdetail">house address</span>
          <span> icon+bed </span>
          <span> icon+bathrooms </span> */}
               <span className="rentdetail">`{coverPicture.price}/{coverPicture.rentFrequency}`</span>
          {/* <span className="rentdetail">{coverPicture.photoIDs.title}</span> */}
         

          {/* <div>xyz {propertyList.map(Price=><span key={Price.id}>{Price?.purpose}</span>)} </div> */}
        </div>
  )
}

export default Property