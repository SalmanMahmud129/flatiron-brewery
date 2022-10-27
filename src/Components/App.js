import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './NavBar'
import BeerPage from './BeerPage'
import BeerDetail from './BeerDetail'
import AddBeerForm from './AddBeerForm'
import Home from './Home'

function App() {
  const [page, setPage] = useState('/')
  const [beerData, setBeerData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/beers')
    .then(resp => resp.json())
    .then(data => {
        setBeerData(data)
        
    })
},[])

function displayAddedBeer(newBeer){
  setBeerData([...beerData, newBeer])
}

  return (
    <div>
      <NavBar onChangePage={setPage} />
      <Routes>
        <Route path='/beers' element={<BeerPage beerData={beerData} />}/>
        <Route path='/beers/:id' element={<BeerDetail/>}/>
        <Route path='/addbeer' element={<AddBeerForm displayAddedBeer={displayAddedBeer}/>}/>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
