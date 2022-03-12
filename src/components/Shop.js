import React from 'react';
import Item from './Item';

function Shop() {

    const shopItems = [
      {name: 'Soccer Ball', id: 1},
      {name: 'Football', id: 2},
      {name: 'Tennis Ball', id: 3}
    ];

    return (
      <div className="Shop">
        Shop
        {shopItems.map((item) => {
          return <Item key={item.id} item={item} />
        })}
      </div>
    );
}

export default Shop;