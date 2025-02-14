import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} style={{width:"150px",gap:"10px"}}/>
      <Card.Body style={{height:"150px",overflowY:"scroll"}}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.desc}
        </Card.Text>
        <Button variant="primary">{props.category}</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;