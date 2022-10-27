import React, {useState} from 'react'
import {Form, FormButton, Grid, Header} from "semantic-ui-react"

function AddBeerForm({displayAddedBeer}) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    tagline: "",
    description: "",
    image_url: "",
    first_brewed: "",
    abv: "",
    food_pairing1: "",
    food_pairing2: "",
    food_pairing3: "",
  })

  function handleChange(e){
    console.log(e.target.value)
    const {name, value} = e.target
    setFormData({...formData, [name]:value})

  }

  function handleSubmit(e){
    e.preventDefault()
    const newDrink ={
      id: "",
      name: formData.name,
      tagline: formData.name,
      description: formData.description,
      image_url: formData.image_url,
      first_brewed: formData.first_brewed,
      abv: formData.name,
      food_pairing: [formData.food_pairing1, formData.food_pairing2, formData.food_pairing3]
      
    }

    console.log(newDrink)
    // console.log(beerData)
    

    const API = "http://localhost:3001/beers"

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newDrink)
    })
    .then(resp => resp.json())
    .then(data => displayAddedBeer(data))
  }

  
  //form adds the name, tagline, description, image, first brewed, abv, food pairing
  return (
    <div>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group widths='equal' >
              <Form.Input fluid label='Name' placeholder='Enter Name of Beer' name="name" value={formData.name} onChange={handleChange} />
              <Form.Input fluid label='Tagline' placeholder='Enter Beer Tagline' name="tagline" value={formData.tagline} onChange={handleChange} />
              <Form.Input fluid label='Description' placeholder='Enter Description' name="description" value={formData.description} onChange={handleChange}/>
            </Form.Group>

            <Form.Group widths='equal'>
              <Form.Input fluid label='Image' placeholder='Enter Image URL' name="image_url" value={formData.image_url} onChange={handleChange} />
              <Form.Input fluid label='First Brewed' placeholder='Enter Name of Beer' name="first_brewed" value={formData.first_brewed} type='date' onChange={handleChange}/>
              <Form.Input fluid label='ABV' placeholder='Enter ABV' name="abv" value={formData.abv} onChange={handleChange} />
            </Form.Group>

            <Header as='h5'> Add a Good Food Pairing!(Optional)</Header>

            <Form.Group widths="equal" label='Food Pairings (Optional)'>
              <Form.Input fluid label='1' placeholder='Enter Food' name="food_pairing1" value={formData.food_pairing1} onChange={handleChange}/>
              <Form.Input fluid label='2' placeholder='Enter Food' name="food_pairing2" value={formData.food_pairing2} onChange={handleChange}/>
              <Form.Input fluid label='3' placeholder='Enter Food' name="food_pairing3" value={formData.food_pairing3} onChange={handleChange} />
            </Form.Group>
            <FormButton>Submit</FormButton>
          </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      

    
    </div>
  )
}

export default AddBeerForm

