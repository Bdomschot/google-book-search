import React, { useState } from "react";
import Header from "../components/Header";
import Jumbo from "../components/Jumbo";
import Results from '../components/Results';
import Search from "../components/Search";

function SearchPage(){

    const [books, setBooks] = useState([])

    return (
        <div>
          <Header/>
          <Jumbo />
          <Search setBooks={setBooks}/>
          <Results books= {books}/>
        </div>
    )
}

export default SearchPage;