const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bookClub', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });