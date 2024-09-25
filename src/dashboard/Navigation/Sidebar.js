import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
        <ul className='menu-list'>
            <li><Link to="">COMPONENT 1</Link></li>
            <li><Link to="component2">COMPONENT 2</Link></li>
            <li><Link to="component3">COMPONENT 3</Link></li>
            <li><Link to="component4">COMPONENT 4</Link></li>
            <li><Link to="component5">COMPONENT 5</Link></li>
            <li><Link to="foodpage">FOOD PAGE</Link></li>
            <li><Link to="moviedata">MOVIE DATA</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar