import React from 'react'
import {useNavigate} from "react-router-dom";


function Navbar() {
    const history=useNavigate();

  return (<>       
   <ul  >
            <li >Logo</li>
            <li
            onClick={()=>history(`/rent`)}>Rent</li>
            <li onClick={()=>history(`/buy`)}>Buy</li>

            <li onClick={()=>history(`/sell`)}>Sell</li>
            <li>Manage Property</li>
            <li>Resources</li>
            <li  className="button">Login</li>
            <li className="button">Sign up
            </li>
            </ul>

            
            </>

            
  )
}

export default Navbar
