import React, {useState, useEffect} from "react"

function BeerPage(){

    const [beerData, setBeerData] = useState([]);

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers/')
        .then(resp => resp.json())
        .then(data => setBeerData(data))
    },[])
}

export default BeerPage