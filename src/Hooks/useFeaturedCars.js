import React from 'react';

const useFeaturedCars = () => {
    const [featuredCars, setFeaturedCars] = React.useState([]);

    const url =
      "https://raw.githubusercontent.com/prantokhaan/carData/main/featuredCarData.json";

    React.useEffect(() => {
      fetch("https://calm-plateau-72250.herokuapp.com/featuredCars")
        .then((res) => res.json())
        .then((data) => setFeaturedCars(data));
    }, [featuredCars?.length]);
    return [featuredCars, setFeaturedCars];
}

export default useFeaturedCars;