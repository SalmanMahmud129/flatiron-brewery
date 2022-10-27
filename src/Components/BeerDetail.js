import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { Item } from 'semantic-ui-react'

function BeerDetail(){
    const [beer, setBeer] = useState([])
    const params = useParams()
    
    useEffect(()=> {
        fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
        .then(resp=>resp.json())
        .then(data => setBeer(data[0]))
    },[params.id])

    console.log(beer.food_pairing)
    return (
        <Item.Group className="beerDetail">
            <Item>
             <Item.Image size='small' src={beer.image_url} />
  
            <Item.Content>
                <Item.Header>{beer.name}</Item.Header>
                    <Item.Meta>
                        <span>{beer.tagline}</span>
                    </Item.Meta>
                <Item.Description>
                    <span>Brewed: {beer.first_brewed}</span>
                    <br></br>
                    <span>abv: {beer.abv}</span>
                    <br></br>
                    <br></br>
                    <strong>{beer.description}</strong>
                    <ul>
                        <strong>Food Pairings:</strong>
                        <li>{beer.food_pairing}</li>                    
                    </ul>
                </Item.Description>
            </Item.Content>
            </Item>
        </Item.Group>
    // <>
    //  <h1>{beer.name}</h1>
    //  <h2>{beer.description}</h2>
    //  <h2>{beer.tagline}</h2>
    //  </>
    )
}

export default BeerDetail