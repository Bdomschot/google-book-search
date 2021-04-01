import { Card, Form, Button} from "react-bootstrap";

function Search(){

    return (
        <Card>
            <Card.Body>
                <h3> Book Search.</h3>
                <Form>
                    <Form.Group>
                        <Form.Control type="text" placeholder= "Enter your search here."/>
                    </Form.Group>
                    <Button type="submit">Search</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Search;