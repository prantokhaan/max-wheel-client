import React from 'react';

const useCars = () => {
    const [cars, setCars] = React.useState([]);

    const url =
      "https://raw.githubusercontent.com/prantokhaan/carData/main/carData.json";

    React.useEffect(() => {
      fetch("http://localhost:5000/cars")
        .then((res) => res.json())
        .then((data) => setCars(data));
    }, [cars?.length]);
    return [cars, setCars]
}
export default useCars;