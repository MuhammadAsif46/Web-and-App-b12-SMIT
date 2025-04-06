import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imageBurger from "../../../assets/burger.png"

function BootCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageBurger} width={100} height={260}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BootCard;