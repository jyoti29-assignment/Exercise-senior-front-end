export const UPDATE_ASSET = 'UPDATE_ASSETS'
export const LOAD_DATA = 'LOAD_ASSETS'
const SORT_BY_ALPHABET = "SORT_BY_ASSETNAME";
const SORT_BY_PRICE = "SORT_BY_PRICE";
const FILTER_BY_PRICE = "FILTER_BY_PRICE";


export const updateAsset = (asset) => ({
  type: UPDATE_ASSETS,
  payload: asset
})

export const loadAssets = () => ({
  type: LOAD_ASSETS,
})



export const sortByPrice = payload => ({
   type: SORT_BY_PRICE,
   payload
});
export const filterByPrice = payload => ({
   type: FILTER_BY_PRICE,
   payload
});
export const sortByAlphabet = payload => ({
   type: SORT_BY_ASSETNAME,
   payload
});
export const loadData = (payload) => ({
   type: LOAD_DATA,
   payload
});