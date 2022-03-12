import React, {useContext, useEffect} from 'react';
import CartItem from './CartItem';
import { cartItemsContext } from './Context';

function Cart(props) {

    const {cartItems, setCartItems} = useContext(cartItemsContext);

    useEffect(() => {
        // How do I re-render after removing an item?
    }, [cartItems]);

    return (
        <div className="Cart">
            Cart
            {cartItems.map((item) => {
                return <CartItem key={item.id} item={item}/>
            })}
        </div>
    );
}

export default Cart;