import React from 'react';
import ShopItem from './ShopItem';

function Shop() {

    const shopItems = [
      {name: 'Soccer Ball', id: 1},
      {name: 'Football', id: 2},
      {name: 'Tennis Ball', id: 3},
      {name: 'Baseball', id: 4},
      {name: 'Baseball Bat', id: 5},
      {name: 'Glove', id: 6},
      {name: 'Racket', id: 7}
    ];

    return (
      <div className="Shop">
        Shop
        {shopItems.map((item) => {
          return <ShopItem key={item.id} item={item} />
        })}
      </div>
    );
}

export default Shop;