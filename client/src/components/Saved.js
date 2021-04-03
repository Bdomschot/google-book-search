import { Button, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import API from "../utils/api";

function Saved(){
    
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks()
      }, []);
    
      function loadBooks() {
        API.displayBooks()
          .then(res => 
            setBooks(res.data)
          )
          .catch(err => console.log(err));
      };

    const handleDelete = (id) => {
        API.deleteBook(id)
    }
    
    
    
    return(
        <div>
            {books.map( book => {
                return(
                    <Card>
                        <Card.Body>
                        <Row>
                        <Col md={10}>
                        <Card.Title>{book.title}</Card.Title>
                        <h5> {book.authors} </h5>
                        </Col>
                        <Col md={2}>
                        <Button><a href={book.link} target="_blank" className="text-white" > View </a></Button>
                        {' '}
                        <Button onClick={() => handleDelete(book._id)}> Delete </Button>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={2}>
                        <Card.Img variant="bottom" src={book.image} style={{width:"200px", height:"250px"}}/>
                        </Col>
                        <Col md="auto">
                        <Card.Text>{book.description}</Card.Text>
                        </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}

export default Saved;