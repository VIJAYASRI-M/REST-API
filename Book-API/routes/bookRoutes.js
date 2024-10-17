const express = require('express');
const bookController = require('../controllers/BookController');
const authMiddleware = require('../middleware/authMiddleware');


const router = express.Router();


router.get('/',bookController.getAllBooks);
router.get('/:id',bookController.getBookById);

// protected routes
router.post('/',authMiddleware,bookController.addBook);
router.put('/:id',authMiddleware,bookController.updateBook);
router.delete('/:id',authMiddleware,bookController.DeleteBook);


module.exports= router;