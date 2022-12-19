const initialState = {
  error: null
};

const discount = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BONUS_CASH':
      return {
        state,
        bonusCash: action.payload
      };

    default:
      return state;
  }
};

export default discount;
