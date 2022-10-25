import React, {useState} from 'react'
import {Form, Grid, Header} from "semantic-ui-react"

function AddBeerForm() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    tagline: "",
    description: "",
    image_url: "",
    first_brewed: "",
    abv: "",
    food_pairing: ""
  })
  //form adds the name, tagline, description, image, first brewed, abv, food pairing
  return (
    <div>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={6}>
          <Form>
            <Form.Group widths='equal' >
              <Form.Input fluid label='name' placeholder='Enter Name of Beer' name="beerName" />
              <Form.Input fluid label='tagline' placeholder='Enter Beer Tagline' />
              <Form.Input fluid label='description' placeholder='Enter Description' />
            </Form.Group>

            <Form.Group widths='equal'>
              <Form.Input fluid label='image' placeholder='Enter Image URL' />
              <Form.Input fluid label='first brewed' placeholder='Enter Name of Beer' type='date'/>
              <Form.Input fluid label='abv' placeholder='Enter ABV' />
            </Form.Group>

            <Header as='h5'> Add a Good Food Pairing!(Optional)</Header>
            <Form.Group widths="equal" label='Food Pairings (Optional)'>
              <Form.Input fluid label='1' placeholder='Enter Food' />
              <Form.Input fluid label='2' placeholder='Enter Food' />
              <Form.Input fluid label='3' placeholder='Enter Food' />
            </Form.Group>
          </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      

    
    </div>
  )
}

export default AddBeerForm