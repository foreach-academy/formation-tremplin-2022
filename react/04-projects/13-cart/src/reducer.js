const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }

  if (action.type === 'REMOVE_ITEM') {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }

  if (action.type === 'INCREASE') {
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        item.amount += 1;
      }

      return item;
    });

    return { ...state, cart: newCart };
  }

  if (action.type === 'DECREASE') {
    const newCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          item.amount -= 1;
        }

        return item;
      })
      .filter((item) => item.amount > 0);

    return { ...state, cart: newCart };
  }

  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (totals, item) => {
        totals.amount += item.amount;
        totals.total += item.amount * item.price;

        return totals;
      },
      {
        total: 0,
        amount: 0
      }
    );

    total = Number(total.toFixed(2));

    return { ...state, total, amount };
  }

  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, loading: false, cart: action.payload };
  }

  throw new Error("Pas d'actions correspondantes");
};

export default reducer;
