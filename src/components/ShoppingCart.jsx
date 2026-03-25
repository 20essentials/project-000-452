import React from 'react';
import { useReducer } from 'react';
import {
  initialStateShoppingCart,
  shoppingReducer,
  TYPES
} from '../reducers/shoppingReducer';
import { ItemProduct } from './itemProduct';
import { ItemLoader } from './ItemLoader';
import CartModal from './CartModal';
import { useRef } from 'react';
import { useState } from 'react';

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, initialStateShoppingCart);
  const [counter, setCounter] = useState(0);
  const { products, cart } = state;
  const refModalCart = useRef(null);

  const addToCart = id => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      id: id
    });
  };

  const addToCounter = () => {
    if (counter >= 0) {
      setCounter(counter + 1);
    }
  };
  const restToCounter = (n = 1) => {
    if (counter > 0) {
      setCounter(counter - n);
    }
  };

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, id });
    }
  };

  const openModal = e => {
    e.target.classList.toggle('escondido');
    refModalCart.current.classList.toggle('open');
  };

  return (
    <main>
      <CartModal
        myRef={refModalCart}
        cart={cart}
        deleteFromCart={deleteFromCart}
        addToCart={addToCart}
        addToCounter={addToCounter}
        restToCounter={restToCounter}
      ></CartModal>
      <header className='am-header'>
        <ItemLoader />
      </header>
      <section className='container-products'>
        {products.map(product => (
          <ItemProduct
            key={product.id}
            data={product}
            addToCart={addToCart}
            addToCounter={addToCounter}
          ></ItemProduct>
        ))}
      </section>
      <button className='openCart' onClick={openModal}>
        <div className={`contador ${counter > 0 ? 'counterGreen' : ''}`}>
          {counter}
        </div>
        <svg>
          <use href='/myAssets/svgSprite.svg#carTotal'></use>
        </svg>
      </button>
    </main>
  );
};

export default ShoppingCart;
