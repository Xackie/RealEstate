import React from 'react'
import {useNavigate} from "react-router-dom";


function Navbar() {
    const history=useNavigate();

  return (
    <div className="Nav" style={{border:"1px solid black", width:"100%",height:80}}>
        <ul className='NavList' >
            <li className='NavItems'>Logo</li>
            <li
            onClick={()=>history(`/rent`)}>Rent</li>
            <li onClick={()=>history(`/buy`)}>Buy</li>

            <li onClick={()=>history(`/sell`)}>Sell</li>
            <li>Manage Property</li>
            <li>Resources</li>
        </ul>
        <div className='buttons'> 
        <button  className='button'>Login</button>
        <button  className='button'>Sign up</button>
        </div>
        </div>
  )
}

export default Navbar
