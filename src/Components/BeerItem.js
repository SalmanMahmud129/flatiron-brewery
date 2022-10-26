import React from 'react'
import { Card, Image } from 'semantic-ui-react'

function BeerItem({beer}) {
  // console.log(beer)
  return (
  
    <Card >
      <div className='ui tiny images'>
        <Image src={beer.image_url} wrapped ui={false} />
      </div>
      <Card.Content>
      <Card.Header>{beer.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Brewed: {beer.first_brewed}</span>
      </Card.Meta>
      <Card.Description>
        {beer.tagline}
      </Card.Description>
    </Card.Content>
    {/* <Card.Content extra>
     {beer.tagline}
    </Card.Content> */}
  </Card>
)}

export default BeerItem