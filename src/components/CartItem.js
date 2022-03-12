import React, { useContext } from 'react';
import { cartItemsContext } from './Context';

function CartItem(props) {

    const {cartItems, setCartItems} = useContext(cartItemsContext);

    const updateQuantity = () => {
        const newCartItems = cartItems.slice();
        const quantity = document.querySelector(`.itemID${props.item.id}Quantity`).value;
        for (let i = 0; i < newCartItems.length; i++) {
            if (newCartItems[i].id === props.item.id) {
                newCartItems[i].quantity = quantity;
            }
        }
        setCartItems(newCartItems);
    }

    const removeItem = () => {
        const newCartItems = cartItems.slice();
        for (let i = 0; i < newCartItems.length; i++) {
            if (newCartItems[i].id === props.item.id) {
                newCartItems.splice(i, 1);
            }
        }
        setCartItems(newCartItems);
    }

    return (
        <div className="Item">
            {props.item.name} - 
            Quantity: <input defaultValue={props.item.quantity} className={`itemID${props.item.id}Quantity`} type='number'></input>
            <button onClick={updateQuantity}>Update Quantity</button>
            <button onClick={removeItem}>Remove</button>
        </div>
    );
}

export default CartItem;