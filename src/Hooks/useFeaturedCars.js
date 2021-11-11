import React from 'react';

const useFeaturedCars = () => {
    const [featuredCars, setFeaturedCars] = React.useState([]);

    const url =
      "https://raw.githubusercontent.com/prantokhaan/carData/main/featuredCarData.json";

    React.useEffect(() => {
      fetch("http://localhost:5000/featuredCars")
        .then((res) => res.json())
        .then((data) => setFeaturedCars(data));
    }, [featuredCars?.length]);
    return [featuredCars, setFeaturedCars];
}

export default useFeaturedCars;