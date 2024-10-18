const express = require('express');
const bookController = require('../controllers/BookController');
const authMiddleware = require('../middleware/authMiddleware');


const router = express.Router();


router.get('/',bookController.getAllBooks);
router.get('/:id',bookController.getBookById);

// protected routes
router.post('/',bookController.addBook);
router.put('/:id',bookController.updateBook);
router.delete('/:id',bookController.DeleteBook);


module.exports= router;