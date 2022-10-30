import React, {useState} from "react"
import Search from "./Search";
import BeerCollection from "./BeerCollection";
import AddBeerForm from "./AddBeerForm";

function BeerPage({beerData}){

    const [search, setSearch] = useState('')

    


    // const localAPI = "http://localhost:3001/"
    // function postDataLocally(data){
    //     fetch(localAPI, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type" : "application/json",
    //             "Accept" : "application/json"
    //     },
    //     body : JSON.stringify(data)
    //     })
    //     .then(resp => resp.json())
        
    // }

    // console.log(beerData)

   
    
    

    
    //search by description
    const beerDisplay = beerData
        .filter((beer) => beer.name.toLowerCase().includes(search.toLowerCase()))
        

    return(
        <>
        <br></br>
        <br></br>
        <Search search={search} setSearch={setSearch}/>
        <br></br>
        <br></br>
        <BeerCollection beerData={beerDisplay} />
        </>

    )
}

export default BeerPage