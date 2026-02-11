const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get featured books
router.get('/featured', async (req, res) => {
    try {
        const featuredBooks = await Book.find({ isFeatured: true });
        res.json(featuredBooks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get favorite books
router.get('/favorites', async (req, res) => {
    try {
        const favoriteBooks = await Book.find({ isFavorite: true });
        res.json(favoriteBooks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get single book
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a book
router.post('/', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        price: req.body.price,
        rating: req.body.rating,
        bgColor: req.body.bgColor,
        image: req.body.image,
        category: req.body.category,
        isFeatured: req.body.isFeatured
    });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
