import { Button, Card } from "react-bootstrap";
import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import API from "../utils/api";

function Results({books}){
    
    const handleSave =  (book) =>{

        API.saveBook(
            {
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                description: book.volumeInfo.description,
                image: book.volumeInfo.imageLinks.thumbnail,
                link: book.volumeInfo.previewLink
            }
        )
    }
    
    return(
        <div>
            {books.map( book => {
                return(
                    <Card>
                        <Card.Body>
                        <Row>
                        <Col md={10}>
                        <Card.Title>{book.volumeInfo.title}</Card.Title>
                        <h5> {book.volumeInfo.authors} </h5>
                        </Col>
                        <Col md={2}>
                        <Button><a href={book.volumeInfo.previewLink} target="_blank" className="text-white"> View </a></Button>
                        {' '}
                        <Button onClick={() => handleSave(book)}> Save </Button>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={2}>
                        <Card.Img variant="bottom" src={book.volumeInfo.imageLinks.thumbnail} style={{width:"200px", height:"250px"}}/>
                        </Col>
                        <Col md="auto">
                        <Card.Text>{book.volumeInfo.description}</Card.Text>
                        </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}

export default Results;