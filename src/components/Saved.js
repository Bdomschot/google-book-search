import { Button, Card } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Saved(){
    return(
        <div>
            <Card>
                <Card.Body>
                <Row>
                <Col md={10}>
                <Card.Title>Title</Card.Title>
                <h5> Author </h5>
                </Col>
                <Col md={2}>
                <Button> View </Button>
                {' '}
                <Button> Delete </Button>
                </Col>
                </Row>
                <Row>
                <Col md={2}>
                <Card.Img variant="bottom" style={{width:"200px", height:"250px"}}/>
                </Col>
                <Col md="auto">
                <Card.Text>Description</Card.Text>
                </Col>
                </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Saved;