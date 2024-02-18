import React from 'react';
import ParkingLotItem from './ParkingLotItem';

import './ParkingLotList.css';

export default function ParkingLotList({ parkingLotItems }) {

  const ListItems = parkingLotItems.map(item => 
    <ParkingLotItem key={item.id} { ...item } />
  );

  return (
      <section className="Parking-lot-list-container"> { ListItems } </section>
  );
}