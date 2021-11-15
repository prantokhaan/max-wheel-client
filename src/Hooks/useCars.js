import React from 'react';

const useCars = () => {
    const [cars, setCars] = React.useState([]);

    

    React.useEffect(() => {
      fetch("http://localhost:5000/cars")
        .then((res) => res.json())
        .then((data) => setCars(data));
    }, [cars?.length, cars]);
    return [cars, setCars]
}
export default useCars;