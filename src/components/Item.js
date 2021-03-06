import React, { useContext } from 'react';
import { cartItemsContext } from './Context';

function Item(props) {

    const {cartItems, setCartItems} = useContext(cartItemsContext);

    const addToCart = () => {
        const quantity = document.querySelector(`.itemID${props.item.id}Quantity`).value;
        const cartItem = {name: props.item.name, quantity: quantity, id: props.item.id}
        if (cartItems.some(item => item.id === props.item.id)) {
            return;
        } else {
            setCartItems([...cartItems, cartItem]);
        }
    }

    return (
        <div className="Item">
            {props.item.name}: {props.item.quantity}
            <input className={`itemID${props.item.id}Quantity`} type='number'></input>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default Item;