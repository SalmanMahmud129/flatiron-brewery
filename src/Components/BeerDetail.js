import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Item } from 'semantic-ui-react'


function BeerDetail() {
    const [beer, setBeer] = useState([])
    const params = useParams()


    useEffect(() => {
        fetch(`http://localhost:3001/beers/${params.id}`)
            .then(resp => resp.json())
            .then(data => {
                // console.log(data)
                setBeer(data)

            })
    }, [params.id])

    // let isThereFoodPairings = beer.food_pairing ? 
    // beer.food_pairing.map(food =>{
    //     console.log(food)
    // }) : "none"

    // console.log(isThereFoodPairings)
    // console.log(beer.food_pairing)

    return (
        <Item.Group className="beerDetail">
            <Item>
                <Item.Image size='small' src={beer.image_url} />

                <Item.Content>
                    <Item.Header><strong>{beer.name}</strong></Item.Header>
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
                            {beer.food_pairing ? beer.food_pairing.map(food => <li key={food}>{food}</li>) : null}
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