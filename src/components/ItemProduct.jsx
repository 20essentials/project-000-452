import React from 'react';

export const ItemProduct = ({ data, addToCart, addToCounter }) => {
  const { id, name, price, src } = data;

  return (
    <article className='productItem'>
      <h2>{name}</h2>
      <div className='container-img'>
        <img src={src} alt={name} />
      </div>
      <div className='container-info'>
        <output>${price}</output>
        <button
          onClick={() => {
            addToCart(id);
            addToCounter();
          }}
        >
          <span className='left'>Add</span>
          <span className='right'>
            <svg>
              <use href='/myAssets/svgSprite.svg#cartPlus'></use>
            </svg>
          </span>
        </button>
      </div>
    </article>
  );
};
