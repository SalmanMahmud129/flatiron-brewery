import React, {useState, useEffect} from "react"
import Search from "./Search";
import BeerCollection from "./BeerCollection";

function BeerPage({beerData}){

    
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers/')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setBeerData(data)
            postDataLocally(data)
        })
    },[])


    const localAPI = "http://localhost:3001/"
    function postDataLocally(data){
        fetch(localAPI, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
        },
        body : JSON.stringify(data)
        })
        .then(resp => resp.json())
        
    }

    // console.log(beerData)

    
    

    
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