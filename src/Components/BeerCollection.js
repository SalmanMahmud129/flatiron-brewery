import React from 'react'
import { Card } from 'semantic-ui-react'
import BeerItem from './BeerItem'

function BeerCollection({beerData}) {
  const beerMap = beerData.map((beer)=> <BeerItem key={beer.id} beer={beer}/>)

  return (
    <Card.Group itemsPerRow={5}>{beerMap}</Card.Group>
  )
}

export default BeerCollection
