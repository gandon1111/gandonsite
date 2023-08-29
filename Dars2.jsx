import React from 'react'
import img1 from "./1.jpg";

function Dars2() {
  return (
    <div className='Card'>
      <div className="Cardleft">
        <img src={img1} alt="" />
      </div>
      <div className="Cardright">
        <h1>nomi</h1>
        <h3><i>narxi $</i></h3>
        <div className="cardColors">
          <div className="bg-secondary cardColor"></div>
          <div className="bg-danger cardColor"></div>
          <div className="bg-info cardColor"></div>
          <div className="bg-dark cardColor"></div>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In sapiente, laboriosam non corrupti hic magni sit possimus veritatis deserunt doloribus officia asperiores ex et est vero minima distinctio? Explicabo, labore?</p>
      </div>
    </div>
  )
}

export default Dars2
