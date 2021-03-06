const db = require('../models')


module.exports = {
  saveBook: (req, res) => {
    db.Book
      .create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err))
  },

  displayBooks: (req, res) => {
      db.Book
      .find({})
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err))
  },

  deleteBook: (req, res) => {
      db.Book
      .findByIdAndDelete(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err))

  }


}