import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'

function BeerItem({beer}) {
  
  const navigate = useNavigate();

  function showBeerDetail(){
    navigate(`/beers/${beer.id}`)
  }
  
  return (

    <Card className="beerImage" onClick={showBeerDetail}>
      <div>
        <Image className='ui tiny images'src={beer.image_url} wrapped ui={false} />
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