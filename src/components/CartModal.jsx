import { ItemCart } from './ItemCart';

const normalizePrice = ({ price, quantity }) => {
  const priceNormalize = +price.replace(',', '.');
  return +(priceNormalize * +quantity).toFixed(2);
};

const CartModal = ({
  myRef,
  cart,
  deleteFromCart,
  addToCart,
  addToCounter,
  restToCounter,
  newTotal
}) => {
  const priceTotal = cart
    .reduce(
      (totalMoney, { price, quantity }) =>
        totalMoney + normalizePrice({ price, quantity }),
      0
    )
    .toFixed(2);

  return (
    <section className='cart-modal' ref={myRef}>
      <div className='header'>
        <h2>TOTAL ${priceTotal}</h2>
      </div>
      {cart.map(item => (
        <ItemCart
          key={item.id}
          data={item}
          deleteFromCart={deleteFromCart}
          addToCart={addToCart}
          addToCounter={addToCounter}
          restToCounter={restToCounter}
          newTotal={newTotal}
          normalizePrice={normalizePrice}
        ></ItemCart>
      ))}
    </section>
  );
};

export default CartModal;
