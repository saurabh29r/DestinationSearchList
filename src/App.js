import React,{useState} from 'react'
import './App.css';
import SearchDestinations from './Component/SearchDestinations';
import {FaSearch} from "react-icons/fa"


const destinationsList = [
  {
    id: 1,
    name: 'Melaka Mosque',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png',
  },
  {
    id: 2,
    name: 'Shrubland',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/shrubland-img.png',
  },
  {
    id: 3,
    name: 'New York',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/new-york-img.png',
  },
  {
    id: 4,
    name: 'Escarpment',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/escarpment-img.png',
  },
  {
    id: 5,
    name: 'Westminster Abbey',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/westminster-abbey-img.png',
  },
  {
    id: 6,
    name: 'South Downs National Park',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/south-downs-national-park-img.png',
  },
  {
    id: 7,
    name: 'National Historic Site',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/national-historic-site-img.png',
  },
  {
    id: 8,
    name: 'Tower Bridge',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/tower-bridge-img.png',
  },
  {
    id: 9,
    name: 'Arc Here',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/arc-here-img.png',
  },
  {
    id: 10,
    name: 'Steeple',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/steeple-img.png',
  },
  {
    id: 11,
    name: 'Glaciokarst',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/glaciokarst-img.png',
  },
  {
    id: 12,
    name: 'Parco Nazionale delle Cinque Terre',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/parco-nazionale-delle-cinque-terre-img.png',
  },
]

function App() {
  const[search, setSearch] = useState("")
  console.log(search)
  return (
    <>
      <div className='bg-heading'>
           <h1 className='heading'> Destination Search List </h1>
          </div>

          <div className='bg-heading'>
          <div className='bg'>
          <div className='input-wrapper'>
          <FaSearch id='search-icon'/>
        <input type='search' placeholder='Please Enter the keyword' onChange={(e)=>setSearch(e.target.value)}/>
   </div>
    </div>
          </div>


    <div>
      {destinationsList.filter((destinationList)=>{
        return search.toLocaleLowerCase() === ''? destinationList : destinationList.name.toLocaleLowerCase().includes(search)

      }).map((destinationList)=>
       <SearchDestinations key={destinationList.id} name={destinationList.name} imgUrl={destinationList.imgUrl}/>
      )}
      
     
    </div>
    </>
  );
}

export default App;
