import { useParams } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';


function BeerDetails({beers}){
    const { id } = useParams();

    const foundBeer = beers.find((oneBeer)=>{
        return oneBeer._id===id;
    })
    console.log(foundBeer)
    return (
        <Card style={{ width: '80vh' }}>
          <Card.Img variant="top" src={foundBeer.image_url} />
          <Card.Body>
          <ListGroup.Item className="detailsItemCard"><Card.Title>{foundBeer.name}</Card.Title><Card.Text>{foundBeer.attenuation_level}</Card.Text></ListGroup.Item>
          <ListGroup.Item className="detailsItemCard"><Card.Subtitle className="mb-2 text-muted">{foundBeer.tagline}</Card.Subtitle><Card.Text>{foundBeer.first_brewed}</Card.Text></ListGroup.Item>
          <ListGroup.Item><Card.Text>
          {foundBeer.description}
            </Card.Text></ListGroup.Item>
            <ListGroup.Item>{foundBeer.contributed_by}</ListGroup.Item>
          </Card.Body>
        </Card>
      );
}

export default BeerDetails