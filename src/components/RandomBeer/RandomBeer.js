import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import axios from 'axios';
import './RandomBeer.css'

function RandomBeer(){
    const randomAPI="https://ih-beers-api2.herokuapp.com/beers/random"
    const [foundBeer, setFoundBeer] = useState({})
    useEffect(()=>{
        console.log("useEffect - Random render (Mounting)");
        axios.get(randomAPI).then((response) => {
          setFoundBeer(response.data);
        });
      }, []);

    
    
    return (
      <div className="BeerDetailsCard">
        <Card style={{ width: '80vh', display:'flex', justifyContent:'center', alignContent:'center', alignItems:'center', justifyItems:'center', marginTop:'1vh'  }}>
          <Card.Img variant="top" style={{height:'50vh', width:'auto'}}  src={foundBeer.image_url} />
        
          <Card.Body>
          <ListGroup.Item ><div className="detailsItemCard"><Card.Title>{foundBeer.name}</Card.Title><Card.Text>{foundBeer.attenuation_level}</Card.Text></div></ListGroup.Item>
          <ListGroup.Item ><div className="detailsItemCard"><Card.Subtitle className="mb-2 text-muted">{foundBeer.tagline}</Card.Subtitle><Card.Text>{foundBeer.first_brewed}</Card.Text></div></ListGroup.Item>
          <ListGroup.Item><Card.Text>
          {foundBeer.description}
            </Card.Text></ListGroup.Item>
            <ListGroup.Item>{foundBeer.contributed_by}</ListGroup.Item>
          </Card.Body>
        </Card>
        </div>
      );
}
export default RandomBeer