import React from 'react';
import { useParams } from "react-router";


const useCarPurchase = () => {
    const {carId} = useParams()
    const [purchasedCar, setPurchasedCar] = React.useState({});

    React.useEffect(() => {
        fetch(`http://localhost:5000/car/${carId}`)
          .then((res) => res.json())
          .then((data) => setPurchasedCar(data));
    }, [])
    return [purchasedCar];
}
export default useCarPurchase;