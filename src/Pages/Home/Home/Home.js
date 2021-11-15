import React from 'react';
import Reviews from '../../Review/Reviews/Reviews';
import Banner from '../Banner/Banner';
import FeaturedCars from '../FeaturedCars/FeaturedCars/FeaturedCars';
import Newsletter from '../NewsLetter/NewsLetter';
import Stats from '../Stats/Stats';

const Home = () => {
    return (
        <div>
            <Banner />
            <Stats />
            <FeaturedCars />
            <Reviews />
            <Newsletter />
        </div>
    );
};

export default Home;