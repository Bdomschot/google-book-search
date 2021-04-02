import { Card, Form, Button} from "react-bootstrap";
import React from "react";
import API from "../utils/api";
import {useRef} from "react";

function Search({setBooks}){

    const searchInput = useRef();

    const handleSubmit = e => {

        e.preventDefault();

        API.searchBooks(searchInput.current.value)
        .then((res) =>{
            setBooks(res.data.items)
        })
    }


    return (
        <Card>
            <Card.Body>
                <h3> Book Search.</h3>
                <Form>
                    <Form.Group>
                        <Form.Control ref={searchInput} type="text" placeholder= "Enter your search here."/>
                    </Form.Group>
                    <Button onClick={handleSubmit} type="submit">Search</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Search;