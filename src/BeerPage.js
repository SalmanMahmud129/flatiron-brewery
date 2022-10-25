import React, {useState, useEffect} from "react"
import AddBeerForm from "./AddBeerForm";
import Search from "./Search";
import BeerCollection from "./BeerCollection";

function BeerPage(){

    const [beerData, setBeerData] = useState([]);

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers/')
        .then(resp => resp.json())
        .then(data => setBeerData(data))
    },[])

    // console.log(beerData)
    return(
        <>
        <Search />
        <AddBeerForm />
        <BeerCollection beerData={beerData} />
        </>

    )
}

export default BeerPage