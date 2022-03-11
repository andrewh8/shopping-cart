import React from 'react';
import {Link} from 'react-router-dom';

function Nav(props) {

  return (
    <nav className="Nav">
      <ul className='navLinks'>
        <Link to='/'>
        <li>Home</li>
        </Link>
        <Link to='/Shop'>
          <li>Shop</li>
        </Link>
        <Link to='/Cart'>
          <li>Cart</li>
        </Link>
      </ul>
      <div>
        Cart: {props.cartItems.length}
      </div>
    </nav>
  );
}

export default Nav;