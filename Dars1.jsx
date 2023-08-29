import React, { useEffect } from 'react'
import img1 from "./1.jpg";
function Dars1() {

  return (
    <div>
      <div className="card w-25 m5">
        <div className="cardImg">
          <img className='w-100' src={img1} alt="" />
        </div>
      </div>
      <div className="card-body text-center">
        <h3>nomi</h3>
        <p>narxi</p>
        <button>buy</button>
      </div>
    </div>
  )
}

export default Dars1
