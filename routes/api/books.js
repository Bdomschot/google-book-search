const router = require('express').Router();
const bookControllers = require('../../controllers/bookControllers');

router.route('/')
    
    .post(bookControllers.saveBook)
    .get(bookControllers.displayBooks);

router.route('/:id')

    .delete(bookControllers.deleteBook);


module.exports = router