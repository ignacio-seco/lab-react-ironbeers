import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import AllBeersPic from "../../assets/beers.png";
import RandomBeersPic from "../../assets/random-beer.png";
import NewBeerPic from "../../assets/new-beer.png";
import { Link } from "react-router-dom";
import "./HomePage.css";
function HomePage({ setShow }) {
  const hideNavBar = () => {
    return setShow(false)
  }
  hideNavBar()
  return (
    <Container className="homePageLinks">
      <Link to="/beers">
        <Card onClick={() => setShow(true)}>
          <Card.Img
            variant="top"
            src={AllBeersPic}
          />
          <Card.Body>
            <Card.Title>
              <h1>All Beers</h1>
            </Card.Title>
            <Card.Text>Some Lorem Ipsum content.</Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <Link to="/random-beer">
        <Card onClick={() => setShow(true)}>
          <Card.Img
            variant="top"
            src={RandomBeersPic}
          />
          <Card.Body>
            <Card.Title>
              <h1>Random Beer</h1>
            </Card.Title>
            <Card.Text>Some Lorem Ipsum content.</Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <Link to="/new-beer">
        <Card onClick={() => setShow(true)}>
          <Card.Img
            variant="top"
            src={NewBeerPic}
          />
          <Card.Body>
            <Card.Title>
              <h1>New Beer</h1>
            </Card.Title>
            <Card.Text>Some Lorem Ipsum content.</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Container>
  );
}
export default HomePage;
