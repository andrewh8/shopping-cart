import React, {useContext} from 'react';
import Item from './Item';
import { cartItemsContext } from './Context';

function Cart(props) {

    const {cartItems, setCartItems} = useContext(cartItemsContext);

    return (
        <div className="Cart">
            Cart
            {cartItems.map((item) => {
                return <Item key={item.id} item={item}/>
            })}
        </div>
    );
}

export default Cart;