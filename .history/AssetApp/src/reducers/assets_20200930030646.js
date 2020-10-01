import { UPDATE_ASSETS, LOAD_ASSETS, FILTER_BY_PRICE, SORT_BY_ALPHABET, SORT_BY_PRICE } from '../actions'

const initialState = {};
const store = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ASSETS:
      return {
        ...state,
        [action.payload.id]: { ...state[action.payload.id], ...action.payload }
      }
      case SORT_BY_ALPHABET:
           //sort alphabetically
           return state;
       case SORT_BY_PRICE:
           //sort by price
           return state;
       case FILTER_BY_PRICE:
           //filter by price
           return state;
       case LOAD_ASSETS:
         //load data
        let count = action.payload.count;
        let products = generate(count);
        return {
          ...state,
          products
      };
           return state;

    default:
      return state
  }
}

export default store;


