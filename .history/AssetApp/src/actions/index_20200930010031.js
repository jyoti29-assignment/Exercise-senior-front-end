export const CREATE_ASSET = 'CREATE_ASSET'
export const LOAD_ASSETS = 'LOAD_ASSETS'


export const createAsset = (asset) => ({
  type: CREATE_ASSET,
  payload: asset
})

export const loadAssets = () => ({
  type: LOAD_ASSETS,
})
