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

    //this function will be passed to addbeerform' handle submit within the second then of the post request. Make sure to pass it down as a prop on line 26
    
    

    
    //search by description
    const beerDisplay = beerData
        .filter((beer) => beer.description.toLowerCase().includes(search.toLowerCase()))
        

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