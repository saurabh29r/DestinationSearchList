import React from 'react'

import {FaSearch} from "react-icons/fa"

import "./index.css"

export default function Searchlist() {
  return (
    <div className='bg'>
    <div className='input-wrapper'>
        <FaSearch id='search-icon'/>
        <input type='search' placeholder='Please Enter the keyword'/>



      
    </div>
    </div>
  )
}
