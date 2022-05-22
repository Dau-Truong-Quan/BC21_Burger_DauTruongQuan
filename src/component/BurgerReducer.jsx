const burgerState = {
  burger: { salad: 1, cheese: 1, beef: 3 },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
  total: 85,
};

export const BurgerReducer = (state = burgerState, acticon) => {
  return { ...state };
};
