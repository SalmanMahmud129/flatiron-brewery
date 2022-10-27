import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './NavBar'
import BeerPage from './BeerPage'
import BeerDetail from './BeerDetail'
import AddBeerForm from './AddBeerForm'
import Home from './Home'

function App() {
  const [page, setPage] = useState('/')
  document.body.style.backgroundColor = "#282c34"
  return (
    <div>
      <NavBar onChangePage={setPage} />
      <Routes>
        <Route path='/beers' element={<BeerPage />}/>
        <Route path='/beers/:id' element={<BeerDetail/>}/>
        <Route path='/addbeer' element={<AddBeerForm />}/>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
