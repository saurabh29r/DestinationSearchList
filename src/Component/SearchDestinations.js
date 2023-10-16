import React from 'react'
import './index.css'

export default function SearchDestinations(destinationList) {
    const {name,imgUrl} = destinationList 
  return (
    <div className='bg-conatiner'>
       <div className='container-div'>
      <ul className='ul-tags'>
        <li>
            <img  src={imgUrl} className='imgs' alt='Not-visible'/>
        </li>
        <li className='names'> {name}</li>
      </ul>
      </div>
    </div>
  )
}
