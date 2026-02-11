const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 5
    },
    bgColor: {
        type: String,
        default: '#ffffff'
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    isFavorite: {
        type: Boolean,
        default: false
    },
    hasQty: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);
