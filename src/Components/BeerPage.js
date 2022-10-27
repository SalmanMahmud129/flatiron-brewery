import React, {useState, useEffect} from "react"
import Search from "./Search";
import BeerCollection from "./BeerCollection";

function BeerPage({beerData}){

    
    const [search, setSearch] = useState('')

   

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