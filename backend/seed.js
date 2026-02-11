const mongoose = require('mongoose');
const Book = require('./models/Book');
require('dotenv').config();

const featuredBooks = [
    {
        title: "Twilight Fortress",
        author: "Gregory Barrett",
        description: "Jane McLane's latest masterpiece challenges conventional storytelling. Explore transformative narratives that...",
        price: 190.99,
        rating: 5,
        bgColor: "#dae9f2",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
        category: "Fiction",
        isFeatured: true,
        isFavorite: false
    },
    {
        title: "The Silent Echo",
        author: "Sarah Mitchell",
        description: "Jane McLane's latest masterpiece challenges conventional storytelling. Explore transformative narratives that...",
        price: 220.99,
        rating: 5,
        bgColor: "#fef3d5",
        image: "https://images.unsplash.com/photo-1543005127-d162c0a85073?auto=format&fit=crop&q=80&w=400",
        category: "Mystery",
        isFeatured: true,
        isFavorite: false
    },
    {
        title: "Mystic River",
        author: "Dennis Lehane",
        description: "Jane McLane's latest masterpiece challenges conventional storytelling. Explore transformative narratives that...",
        price: 182.99,
        rating: 5,
        bgColor: "#e2f2d5",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
        category: "Thriller",
        isFeatured: true,
        isFavorite: false
    }
];

const favoriteBooks = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        description: "The Boy Who Lived.",
        price: 255.2,
        rating: 4,
        image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?auto=format&fit=crop&q=80&w=400",
        category: "Fantasy",
        isFeatured: false,
        isFavorite: true,
        hasQty: false
    },
    {
        title: "Hygge",
        author: "Meik Wiking",
        description: "The Danish Way to Live Well.",
        price: 289.2,
        rating: 4,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
        category: "Lifestyle",
        isFeatured: false,
        isFavorite: true,
        hasQty: true
    },
    {
        title: "Fifty Shades Darker",
        author: "E. L. James",
        description: "The second book in the trilogy.",
        price: 325.2,
        rating: 5,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
        category: "Romance",
        isFeatured: false,
        isFavorite: true,
        hasQty: false
    },
    {
        title: "The Two Towers",
        author: "J.R.R. Tolkien",
        description: "The second volume of the Lord of the Rings.",
        price: 425.2,
        rating: 4,
        image: "https://images.unsplash.com/photo-1621350233020-00ca9a03971e?auto=format&fit=crop&q=80&w=400",
        category: "Epic Fantasy",
        isFeatured: false,
        isFavorite: true,
        hasQty: false
    }
];

const generalBooks = [
    {
        title: "Literary Foundations",
        author: "Stacker",
        description: "Foundations of modern literature.",
        price: 150.00,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
        category: "Classic"
    },
    {
        title: "How Innovation Works",
        author: "Matt Ridley",
        description: "Exploring the secrets of innovation.",
        price: 210.00,
        image: "https://m.media-amazon.com/images/I/81L6E0BOH3L.jpg",
        category: "Business"
    },
    {
        title: "Emma Elliot",
        author: "Author Name",
        description: "A story of Emma Elliot.",
        price: 175.00,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400",
        category: "Fiction"
    },
    {
        title: "Pages of Time",
        author: "History Maker",
        description: "A journey through history.",
        price: 195.00,
        image: "https://images.unsplash.com/photo-1476275466078-402737450400?auto=format&fit=crop&q=80&w=400",
        category: "History"
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB for seeding...');

        await Book.deleteMany({});
        console.log('Cleared existing books');

        await Book.insertMany([...featuredBooks, ...favoriteBooks, ...generalBooks]);
        console.log('Database seeded successfully!');

        mongoose.connection.close();
    } catch (err) {
        console.error('Error seeding database:', err);
    }
};

seedDB();
