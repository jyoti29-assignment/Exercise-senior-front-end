import { LOAD_ASSETS, createAsset } from "../Redux-Actions/actions";
import "rxjs/add/operator/filter";
import { mock } from "../resource";

const assetsMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_ASSETS:
      mock
        .filter((asset) => asset.id < 400)
        .subscribe((asset) => {
          store.dispatch(createAsset(asset));
        });
      break;
    case SORT_BY_NAME:
      const sortByAlphabetState = Object.assign({}, state);
      let sortedAlphabetArr =
        action.payload.direction === "asc"
          ? sortAsc(state.filteredProducts, "name")
          : sortDesc(state.filteredProducts, "name");

      sortByAlphabetState.filteredProducts = sortedAlphabetArr;
      sortByAlphabetState.appliedFilters = addFilterIfNotExists(
        SORT_BY_ALPHABET,
        sortByAlphabetState.appliedFilters
      );
      sortByAlphabetState.appliedFilters = removeFilter(
        SORT_BY_ALPHABET,
        sortByAlphabetState.appliedFilters
      );

      return sortByAlphabetState;
    case SORT_BY_PRICE:
      let sortByPriceState = Object.assign({}, state);
      let sortedPriceArr =
        action.payload.direction === "asc"
          ? sortAsc(state.filteredProducts, "price")
          : sortDesc(state.filteredProducts, "price");

      sortByPriceState.filteredProducts = sortedPriceArr;
      sortByPriceState.appliedFilters = addFilterIfNotExists(
        SORT_BY_ALPHABET,
        sortByPriceState.appliedFilters
      );
      sortByPriceState.appliedFilters = removeFilter(
        SORT_BY_PRICE,
        sortByPriceState.appliedFilters
      );

      return sortByPriceState;
    case FILTER_BY_VALUE:
      let newState = Object.assign({}, state);
      let value = action.payload.value;
      let filteredValues = state.products.filter((product) => {
        return (
          product.name.toLowerCase().includes(value) ||
          product.designer.toLowerCase().includes(value)
        );
      });

      let appliedFilters = state.appliedFilters;

      if (value) {
        appliedFilters = addFilterIfNotExists(FILTER_BY_VALUE, appliedFilters);

        newState.filteredProducts = filteredValues;
        newState.filteredCount = newState.filteredProducts.length;
        newState.filteredPages = Math.ceil(
          newState.filteredCount / newState.countPerPage
        );
      } else {
        appliedFilters = removeFilter(FILTER_BY_VALUE, appliedFilters);

        if (appliedFilters.length === 0) {
          newState.filteredProducts = newState.products;
          newState.filteredCount = newState.filteredProducts.length;
          newState.filteredPages = Math.ceil(
            newState.filteredCount / newState.countPerPage
          );
        }
      }
      return newState;
    default:
      break;
  }
  return next(action);
};

export default assetsMiddleWare;

function sortAsc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) return 1;

    if (b[field] > a[field]) return -1;

    return 0;
  });
}

function sortDesc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) return -1;

    if (b[field] > a[field]) return 1;

    return 0;
  });
}

function addFilterIfNotExists(filter, appliedFilters) {
  let index = appliedFilters.indexOf(filter);
  if (index === -1) appliedFilters.push(filter);

  return appliedFilters;
}

function removeFilter(filter, appliedFilters) {
  let index = appliedFilters.indexOf(filter);
  appliedFilters.splice(index, 1);
  return appliedFilters;
}
