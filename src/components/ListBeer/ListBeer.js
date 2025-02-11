import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import './ListBeer.css'

function ListBeer({beers}){
    const renderBeers = beers.map((e)=>{return<div className="BeerCard" key={e._id}>
    <div className="imageHolder">
    <Link to={`./${e._id}`}>
    <img src={e.image_url} alt={e.name}/>
    </Link>
    </div>
    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item className='BoldStyle'>{e.name}</ListGroup.Item>
        <ListGroup.Item>{e.tagline}</ListGroup.Item>
        <ListGroup.Item className="contributor"><span className='BoldStyle'>created by: </span>{e.contributed_by}</ListGroup.Item>
      </ListGroup>
    </Card>
    </div> 
})

return(
<div>
    {renderBeers}
</div>
)}
export default ListBeer