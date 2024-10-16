const bookService = require("../services/bookService");

const bookController = {
  addBook: async (req, res) => {
    try {
      const book = req.body;
      const newBook = await bookService.addBook(book);
      res.status(201).json(newBook);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getAllBooks: async (req, res) => {
    try {
      const Books = await bookService.getAllBooks();
      res.status(200).json(Books);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getBookById: async (req, res) => {
    try {
      const id = req.params.id;
      const Book = await bookService.getBookById(id);
      res.status(200).json(Book);
    } catch (err) {
      res
        .status(error.message === "Book not found" ? 404 : 500)
        .json({ error: err.message });
    }
  },

  updateBook: async (req, res) => {
    try {
      const book = req.body;
      const id = req.params.id;
      await bookService.updateBook(id, book);
      res.status(200).json({ message: "Book Updated Successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  DeleteBook: async (req, res) => {
    try {
      const id = req.params.id;
      await bookService.DeleteBook(id);
      res.status(204).json({ message: "Book Deleted Successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = bookController;
