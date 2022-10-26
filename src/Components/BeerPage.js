import React, {useState, useEffect} from "react"
import Search from "./Search";
import BeerCollection from "./BeerCollection";

function BeerPage(){

    const [beerData, setBeerData] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers/')
        .then(resp => resp.json())
        .then(data => setBeerData(data))
    },[])
    
    //search by description
    const beerDisplay = beerData
        .filter((beer) => beer.description.toLowerCase().includes(search.toLowerCase()))
        
    return(
        <>
        <Search search={search} setSearch={setSearch}/>
        <BeerCollection beerData={beerDisplay} />
        </>

    )
}

export default BeerPage