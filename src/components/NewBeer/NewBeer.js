import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function NewBeer({setShow, apiData}){
  const [beerForm, setBeerForm] = useState({
    name:"",
    image_url:"",
    tagline:"",
    description:"",
    first_brewed:"",
    attenuation_level:"",
    brewers_tips:"",
    contributed_by:""
  })

  function HandleFormChange(e){
setBeerForm({...beerForm, [e.target.name]:e.target.value});
console.log(e.target.value)
console.log(beerForm)
  }

  function handleSubmit(e){
    e.preventDefault()
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beerForm)
        .then(() => {
            setBeerForm({
              name:"",
              image_url:"",
              tagline:"",
              description:"",
              first_brewed:"",
              attenuation_level:"",
              brewers_tips:"",
              contributed_by:""
            })
            setShow(true)
        })

  }
     
return (
  <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center", justifyItems:"center", alignItems:"center"}}>
    <Form style={{width:"75%"}} onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>name</Form.Label>
        <Form.Control type="text"
          name="name"
          value={beerForm.name}
          onChange={HandleFormChange}
        />
        <Form.Text className="text-muted">
          Place the name of the beer.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text"
          name="image_url"
          value={beerForm.image_url}
          onChange={HandleFormChange}
        />
        <Form.Text className="text-muted">
          The URL of an image of your beer!
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>tagline</Form.Label>
        <Form.Control type="text"
        name="tagline"
          value={beerForm.tagline}
          onChange={HandleFormChange}  />
        <Form.Text className="text-muted">
          Make a good tagline.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Describe your beer</Form.Label>
        <Form.Control as="textarea" rows={3} 
          name="description"
          value={beerForm.description}
          onChange={HandleFormChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>First Brewed</Form.Label>
        <Form.Control type="text"
        name="first_brewed"
          value={beerForm.first_brewed}
          onChange={HandleFormChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Brewers Tips</Form.Label>
        <Form.Control type="text"
        name="brewers_tips"
          value={beerForm.brewers_tips}
          onChange={HandleFormChange}  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Atenuation Level</Form.Label>
        <Form.Control type="numbers"  
          name="attenuation_level"
          value={beerForm.attenuation_level}
          onChange={HandleFormChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contibuted By</Form.Label>
        <Form.Control type="text"
        name="contributed_by"
          value={beerForm.contributed_by}
          onChange={HandleFormChange}
         />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add new beer
      </Button>
    </Form>
    </div>
  );

}
export default NewBeer