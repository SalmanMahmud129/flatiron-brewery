import React, {useState, useEffect} from "react"
import AddBeerForm from "./AddBeerForm";
import Search from "./Search";
import BeerCollection from "./BeerCollection";

function BeerPage(){

    const [beerData, setBeerData] = useState([]);

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers/')
        .then(resp => resp.json())
        .then(data => {
            setBeerData(data)
            postDataLocally(data)
        })
    },[])

    const localAPI = "http://localhost:3001/beers"
    function postDataLocally(beerData){
        fetch(localAPI, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
        },
        body : JSON.stringify(beerData)
        })
        .then(resp => resp.json())
        
    }

    // console.log(beerData)

    //this function will be passed to addbeerform' handle submit within the second then of the post request. Make sure to pass it down as a prop on line 26
    // function displayAddedBeer(newBeer){
    //     setBeerData([...beerData, newBeer])
    // }
    
    return(
        <>
        <Search />
        <AddBeerForm />
        <BeerCollection beerData={beerData} />
        </>

    )
}

export default BeerPage