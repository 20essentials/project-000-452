const path = '/products';

export const TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_ONE_FROM_CART: 'REMOVE_ONE_FROM_CART',
  REMOVE_ALL_FROM_CART: 'REMOVE_ALL_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
};

export const initialStateShoppingCart = {
  products: [
    {
      id: '5000112677607',
      name: 'Coca-Cola Box di Natale',
      price: '16,90',
      src: `${path}/pr1.avif`
    },
    {
      id: '8012666067992',
      name: 'Arance Navel',
      price: '2,39',
      src: `${path}/pr2.avif`
    },
    {
      id: '8012666008940',
      name: 'Classic Latte UHT',
      price: '0,99',
      src: `${path}/pr3.avif`
    },
    {
      id: '8012666007967',
      name: 'Olio di Semi di Girasole',
      price: '2,29',
      src: `${path}/pr4.avif`
    },
    {
      id: '8012666043828',
      name: 'Classic Crescenza',
      price: '1,69',
      src: `${path}/pr5.avif`
    },
    {
      id: '8012666041503',
      name: 'Zuppa Tradizionale Surgelata',
      price: '2,59',
      src: `${path}/pr6.avif`
    },
    {
      id: '8012666050338',
      name: 'Bio Latte Microfiltrato',
      price: '0,99',
      src: `${path}/pr7.avif`
    },
    {
      id: '8012666049127',
      name: 'Bio Farro soffiato',
      price: '0,99',
      src: `${path}/pr8.avif`
    },
    {
      id: '8012666063796',
      name: 'Frollini alla Panna ',
      price: '1,29',
      src: `${path}/pr9.avif`
    },
    {
      id: '8012666070534',
      name: 'Bevanda pesca con mela',
      price: '1,49',
      src: `${path}/pr10.avif`
    },
    {
      id: '3560070666393',
      name: 'Sapone liquido di Marsiglia',
      price: '1,29',
      src: `${path}/pr11.avif`
    },
    {
      id: '8012666058914',
      name: 'Eco Lavatrice mughetto',
      price: '4,19',
      src: `${path}/pr12.avif`
    },
    {
      id: '3560070316939',
      name: 'Confort 4 Veli',
      price: '3,89',
      src: `${path}/pr13.avif`
    },
    {
      id: '8012666063253',
      name: 'Frollini Choco Chunk',
      price: '1,65',
      src: `${path}/pr14.avif`
    },
    {
      id: '8012666028368',
      name: 'Soft Salviettine Milleusi ',
      price: '1,99',
      src: `${path}/pr15.avif`
    },
    {
      id: '8012666019618',
      name: 'Gran Riso',
      price: '3,69',
      src: `${path}/pr16.avif`
    },
    {
      id: '3560070179138',
      name: 'Soft Night Ultra Assorbenti ',
      price: '1,19',
      src: `${path}/pr17.avif`
    },
    {
      id: '8012666019625',
      name: 'Gran Riso in olio',
      price: '4,49',
      src: `${path}/pr18.avif`
    },
    {
      id: '3560070181186',
      name: 'Panna da Cucina',
      price: '0,99',
      src: `${path}/pr19.avif`
    },
    {
      id: '8012666049035',
      name: 'Latte Scremato',
      price: '1,49',
      src: `${path}/pr20.avif`
    },
    {
      id: '8012666028252',
      name: 'Lattughino',
      price: '1,28',
      src: `${path}/pr21.avif`
    },
    {
      id: '8012666028092',
      name: 'Poker',
      price: '1,58',
      src: `${path}/pr22.avif`
    },
    {
      id: '8012666013425',
      name: 'Rucola',
      price: '1,98',
      src: `${path}/pr23.avif`
    },
    {
      id: '8012666035809',
      name: 'Uova da Galline',
      price: '1,79',
      src: `${path}/pr24.avif`
    },
    {
      id: '8012666013401',
      name: 'Insalata 3 Gusti',
      price: '1,58',
      src: `${path}/pr25.avif`
    },
    {
      id: '8012666025602',
      name: 'Cuori di Iceberg',
      price: '1,68',
      src: `${path}/pr26.avif`
    },
    {
      id: '8012666013388',
      name: 'Spinaci',
      price: '1,98',
      src: `${path}/pr27.avif`
    },
    {
      id: '3560071235758',
      name: 'Classic 3 Pelli',
      price: '3,29',
      src: `${path}/pr28.avif`
    },
    {
      id: '3560071235789',
      name: 'Classic 3 Normali',
      price: '2,79',
      src: `${path}/pr29.avif`
    },
    {
      id: '3560071227203',
      name: 'Technic 2 Eco Pack',
      price: '2,69',
      src: `${path}/pr30.avif`
    },
    {
      id: '8012666027484',
      name: 'Extra Salmone Norvegese',
      price: '3.99',
      src: `${path}/pr31.avif`
    },
    {
      id: '8012666049417',
      name: 'Veg Medaglioni Melanzane',
      price: '2,59',
      src: `${path}/pr32.avif`
    },
    {
      id: '8012666025473',
      name: 'Cannelloni Ricotta e Spinaci',
      price: '3,49',
      src: `${path}/pr33.avif`
    },
    {
      id: '8012666049356',
      name: 'Vegetal Mediterraneo',
      price: '3,19',
      src: `${path}/pr34.avif`
    },
    {
      id: '8012666017867',
      name: 'Cacao Amaro',
      price: '0,95',
      src: `${path}/pr35.avif`
    },
    {
      id: '8012666017874',
      name: 'Cacao Zuccherato',
      price: '0,95',
      src: `${path}/pr36.avif`
    },
    {
      id: '8012666064281',
      name: 'Classic Aceto di Vino Bianco',
      price: '0,85',
      src: `${path}/pr37.avif`
    },
    {
      id: '8012666057528',
      name: 'Succo di Limon',
      price: '1,29',
      src: `${path}/pr38.avif`
    },
    {
      id: '8012666010998',
      name: 'Aceto di mele',
      price: '1,15',
      src: `${path}/pr39.avif`
    },
    {
      id: '8012666064274',
      name: 'Aceto di Vino Rosso',
      price: '0,85',
      src: `${path}/pr40.avif`
    },
    {
      id: '8012666042463',
      name: 'Yogurt Magro Mirtillo ',
      price: '0,79',
      src: `${path}/pr41.avif`
    },
    {
      id: '8012666058051',
      name: 'Anacardi Tostati e Salati',
      price: '3,49',
      src: `${path}/pr42.avif`
    },
    {
      id: '8012666028375',
      name: 'Mortadella',
      price: '4,59',
      src: `${path}/pr43.avif`
    },
    {
      id: '8012666022861',
      name: 'Funghi Porcini Secchi',
      price: '4,89',
      src: `${path}/pr44.avif`
    },
    {
      id: '8012666043996',
      name: 'Funghi secchi',
      price: '1,79',
      src: `${path}/pr45.avif`
    },
    {
      id: '8012666051298',
      name: 'Bio Parmigiano Reggiano',
      price: '1,59',
      src: `${path}/pr46.avif`
    },
    {
      id: '8012666020492',
      name: 'Cous Cous',
      price: '1,19',
      src: `${path}/pr47.avif`
    },
    {
      id: '8012666009954',
      name: 'Lievito istantaneo per Dolci',
      price: '0,79',
      src: `${path}/pr48.avif`
    },
    {
      id: '8012666063239',
      name: 'Mozzarella Senza Lattosio',
      price: '2,99',
      src: `${path}/pr49.avif`
    },
    {
      id: '3560071113537',
      name: 'Brie',
      price: '1,99',
      src: `${path}/pr50.avif`
    },
    {
      id: '8012666051274',
      name: 'Stracchino Senza Lattosio',
      price: '1,15',
      src: `${path}/pr51.avif`
    },
    {
      id: '3560070803699',
      name: 'Mozzarella',
      price: '3,39',
      src: `${path}/pr52.avif`
    },
    {
      id: '8012666042869',
      name: 'Asiago',
      price: '2,59',
      src: `${path}/pr53.avif`
    },
    {
      id: '8012666061181',
      name: 'Grana Padano DOP',
      price: '4,79',
      src: `${path}/pr54.avif`
    },
    {
      id: '8012666014248',
      name: 'Formaggio a Pasta Filata',
      price: '2,59',
      src: `${path}/pr55.avif`
    },
    {
      id: '8012666020201',
      name: 'Torta Mascarpone e Gorgonzola',
      price: '2,99',
      src: `${path}/pr56.avif`
    },
    {
      id: '8012666014446',
      name: 'Tè Verde',
      price: '0,85',
      src: `${path}/pr57.avif`
    },
    {
      id: '8012666009459',
      name: 'Sciroppo di Menta',
      price: '2,69',
      src: `${path}/pr58.avif`
    },
    {
      id: '8012666020355',
      name: 'Sale Marino Grosso Iodato',
      price: '0,49',
      src: `${path}/pr59.avif`
    },
    {
      id: '3560070361083',
      name: 'Ceci',
      price: '0,69',
      src: `${path}/pr60.avif`
    },
    {
      id: '8012666007578',
      name: 'Fagioli Cannellini ',
      price: '1,89',
      src: `${path}/pr61.avif`
    },
    {
      id: '8012666010868',
      name: 'Polenta',
      price: '1,49',
      src: `${path}/pr62.avif`
    },
    {
      id: '8012666012602',
      name: 'Risotto alla milanese',
      price: '1,29',
      src: `${path}/pr63.avif`
    },
    {
      id: '8012666012701',
      name: 'Patate Saporite con Rosmarino ',
      price: '2,39',
      src: `${path}/pr55.avif`
    }
  ],
  cart: []
};

export function shoppingReducer(state, action) {
  const { type, id } = action;

  switch (type) {
    case TYPES.ADD_TO_CART: {
      const itemProduct = state.products.find(product => product.id === id);
      const itemCart = state.cart.find(product => product.id === id);

      return itemCart
        ? {
            ...state,
            cart: state.cart.map(item =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
          }
        : {
            ...state,
            cart: [...state.cart, { ...itemProduct, quantity: 1 }]
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      const itemInCart = state.cart.find(pr => pr.id === id);

      return itemInCart?.quantity > 1
        ? {
            ...state,
            cart: state.cart.map(item =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
          }
        : { ...state, cart: state.cart.filter(pr => pr.id !== id) };
    }

    case TYPES.REMOVE_ALL_FROM_CART: {
      return { ...state, cart: state.cart.filter(pr => pr.id !== id) };
    }

    case TYPES.CLEAR_CART: {
      return initialStateShoppingCart;
    }

    default:
      return state;
  }
}
