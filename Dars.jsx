import React, { useRef, useState } from 'react'
function Dars() {
  const [search, setSearch] = useState()
  const refs = useRef()
  const change = ()=>{
    setSearch(refs.current.value)
  }
  return (
    <div className='navbar menu'>
      <h1>Mawinalarni ko'riw</h1>
      <div className="navbarsearc">
        <input type="text" />
        <button>search</button>
        <select>
          <option value="0">Select car:</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Citroen</option>
          <option value="4">Ford</option>
          <option value="5">Honda</option>
          <option value="6">Jaguar</option>
          <option value="7">Land Rover</option>
          <option value="8">Mercedes</option>
          <option value="9">Mini</option>
          <option value="10">Nissan</option>
          <option value="11">Toyota</option>
          <option value="12">Volvo</option>
        </select>
      </div>
    </div>
  )
}

export default Dars
