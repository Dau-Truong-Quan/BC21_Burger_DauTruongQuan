const burgerState = {
  burger: { salad: 1, cheese: 1, beef: 3 },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
  total: 85,
};

export const BurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "ADD_BREADMID": {
      let { propsBurger, amount } = action;
      if (amount === -1 && state.burger[propsBurger] < 1) {
        return { ...state };
      }

      // Thay đổi số lượng
      let burgerUpdate = { ...state.burger };
      console.log(amount);
      burgerUpdate[propsBurger] += amount;
      state.burger = burgerUpdate;
      state.total += amount * state.menu[propsBurger];

      return { ...state };
    }
  }
  return { ...state };
};
