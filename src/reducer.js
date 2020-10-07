export const initialState = {
  basket: [],
  user: null,
};

//in the basket for demo
{
  /* {
      id: "98234",
      title: "Razer BlackWidow Elite",
      price: 130,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71E%2BNcq9%2BKL._AC_SL1500_.jpg",
    },*/
}

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET":
      // logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //Logic for removing item from basket

      //we cloned the basket
      let newBasket = [...state.basket];

      // we check to see if product exits
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //item exists in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
}

export default reducer;
