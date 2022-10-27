import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './NavBar'
import BeerPage from './BeerPage'
import AddBeerForm from './AddBeerForm'
import Home from './Home'
import './App.css';

function App() {
  const [page, setPage] = useState('/')
  const [beerData, setBeerData] = useState([]);
  



  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers/')
    .then(resp => resp.json())
    .then(data => {
        // setBeerData(data)
        data.forEach(beer => {
          postDataLocally(beer)
        })

    })
},[])


const localAPI = "http://localhost:3001/beers"
function postDataLocally(beerData){
  const beerDataBody = {
    name: beerData.name,
    tagline: beerData.tagline,
    description: beerData.description,
    image_url: beerData.image_url,
    first_brewed: beerData.first_brewed,
    abv: beerData.abv,
    food_pairing: beerData.food_pairing
  }
    fetch(localAPI, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
    },
    body : JSON.stringify(beerDataBody)
    })
    .then(resp => resp.json())
    .then(data =>{
      console.log(data)
      // setBeerData([...beerData, data])
    })
    
}


    function displayAddedBeer(newBeer){
        setBeerData([...beerData, newBeer])
    }

    console.log(beerData)
  return (
    <div>
      <NavBar onChangePage={setPage} />
      <Routes>
        <Route path='/beers' element={<BeerPage beerData={beerData} />}/>
        <Route path='/addbeer' element={<AddBeerForm displayAddedBeer={displayAddedBeer}/>}/>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <NavBar />
    //   </header>
    //   <BeerPage />
    // </div>
  );
}

export default App;
