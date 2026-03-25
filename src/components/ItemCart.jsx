export const ItemCart = ({
  data,
  deleteFromCart,
  addToCart,
  addToCounter,
  restToCounter,
  normalizePrice
}) => {
  const { id, name, price, src, quantity } = data;
  const subTotal = normalizePrice({price, quantity})


  return (
    <article className='item-cart'>
      <button className='container-img' onClick={() => {
         deleteFromCart(id, true);
         restToCounter(quantity)
      }}>
        <img src={src} alt={name} />
      </button>
      <div className='information'>
        <p>{name}</p>
        <p>
          ${price} x {quantity} = <strong>${subTotal}</strong>
        </p>
      </div>
      <div className='btns'>
        <button
          className='plus'
          onClick={() => {
            addToCart(id);
            addToCounter();
          }}
        >
          ➕
        </button>
        <button className='minus' onClick={() => {
           deleteFromCart(id, false);
           restToCounter();
        }}>
          ➖
        </button>
      </div>
    </article>
  );
};
