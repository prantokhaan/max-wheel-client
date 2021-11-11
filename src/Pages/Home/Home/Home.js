import React from 'react';
import Reviews from '../../Review/Reviews/Reviews';
import Banner from '../Banner/Banner';
import FeaturedCars from '../FeaturedCars/FeaturedCars/FeaturedCars';
import Stats from '../Stats/Stats';

const Home = () => {
    return (
        <div>
            <Banner />
            <Stats />
            <FeaturedCars />
            <Reviews />
        </div>
    );
};

export default Home;