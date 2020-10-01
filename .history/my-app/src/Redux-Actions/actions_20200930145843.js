export const CREATE_ASSET = 'CREATE_ASSET'
export const LOAD_ASSETS = 'LOAD_ASSETS'
export const SORT_BY_PRICE = 'SORT_BY_PRICE'
export const SORT_BY_NAME = 'SORT_BY_NAME'
export const FILTER_BY_VALUE = 'FILTER_BY_VALUE'
export const FILTER_BY_PRICE = 'FILTER_BY_PRICE'


export const createAsset = (asset) => ({
  type: CREATE_ASSET,
  payload: asset
})

export const loadAssets = () => ({
  type: LOAD_ASSETS,
})

export const sortAssetsByPrice = () => ({
  type: SORT_BY_PRICE,
})

export const sortAssetsByName = () => ({
  type: SORT_BY_NAME,
})

export const filterByValue = () => ({
  type: FILTER_BY_VALUE
});
