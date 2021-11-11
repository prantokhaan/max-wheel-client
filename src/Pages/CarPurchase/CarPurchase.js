import React from 'react';
import { useParams } from 'react-router';
import useCarPurchase from '../../Hooks/useCarPurchase';
import useCars from '../../Hooks/useCars';
import Loading from '../../Shared/Loading';
import PurchasedCar from '../PurchasedCar/PurchasedCar';



const CarPurchase = () => {
    const [cars] = useCars();
    const [purchasedCar] = useCarPurchase();

       
    return (
      <div>
        {!cars.length ? (
          <Loading></Loading>
        ) : (
          <div>
            <PurchasedCar purchasedCar={purchasedCar}></PurchasedCar>
          </div>
        )}
      </div>
    );
};

export default CarPurchase;