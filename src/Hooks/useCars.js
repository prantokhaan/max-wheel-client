import React from 'react';

const useCars = () => {
    const [cars, setCars] = React.useState([]);

    

    React.useEffect(() => {
      fetch("https://calm-plateau-72250.herokuapp.com/cars")
        .then((res) => res.json())
        .then((data) => setCars(data));
    }, [cars?.length, cars]);
    return [cars, setCars]
}
export default useCars;