import axios from "axios"

const API = {
    
    searchBooks: function(query){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },

    saveBook: function(data){
        return axios.post("/api/books", data)
    },

    deleteBook: function(id){
        return axios.delete("/api/books/"+id)
    },

    displayBooks: function(){
        return axios.get("/api/books")
    }
}