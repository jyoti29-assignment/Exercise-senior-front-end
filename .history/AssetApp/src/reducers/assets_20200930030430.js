import { UPDATE_ASSETS, LOAD_ASSETS, FILTER_BY_PRICE,  } from '../actions'

const initialState = {};
const store = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ASSET:
      return {
        ...state,
        [action.payload.id]: { ...state[action.payload.id], ...action.payload }
      }
    default:
      return state
  }
}

export default store


const initialState = {};
const filterStore = (state = initialState, action) => {
   switch (action.type) {
       case SORT_BY_ALPHABET:
           //sort alphabetically
           return state;
       case SORT_BY_PRICE:
           //sort by price
           return state;
       case FILTER_BY_PRICE:
           //filter by price
           return state;
       case LOAD_DATA:
           //load data
           return state;
       default:
           return state;
   }
};
export default filterStore;