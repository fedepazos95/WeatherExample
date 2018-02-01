import { FETCH_WEATHER } from '../actions/index';

const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return [...state, action.payload.data];
  }
  return state;
};

export default weatherReducer;
