import  Jumbotron  from "react-bootstrap/Jumbotron";
import Container from 'react-bootstrap/Container';
import React from 'react';

function Jumbo(){

    return(
        <Jumbotron fluid>
            <Container>
                <h1>React Google Books Search</h1>
                <p>
                Search for and save books of interest.
                </p>
            </Container>
        </Jumbotron>
    )
}
export default Jumbo;