import React from 'react';
import Hero from '../components/Hero';
import FeaturedBooks from '../components/FeaturedBooks';
import Categories from '../components/Categories';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <main>
            <Hero />
            <FeaturedBooks />
            <Categories />
            <Newsletter />
        </main>
    );
};

export default Home;
