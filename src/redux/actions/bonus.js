import axios from 'axios';

// Actions
export const setBonusCash = payload => ({
  type: 'SET_BONUS_CASH',
  payload
});

// Actions creator
export const fetchPizzas = () => dispatch => {
  axios.get('example').then(({data}) => {
    dispatch(setBonusCash(data));
  });
};
