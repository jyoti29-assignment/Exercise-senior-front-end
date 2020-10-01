import { LOAD_ASSETS, createAsset, FILTER_BY_VALUE } from '../Redux-Actions/actions'
import 'rxjs/add/operator/filter'
import { mock } from '../resource'

const assetsMiddleWare = store => next => action => {
  switch(action.type) {
    case LOAD_ASSETS:
      mock
        .filter(asset => asset.id < 400)
        .subscribe((asset) => {
          store.dispatch(createAsset(asset))
        })
      break
      case FILTER_BY_VALUE: {
        debugger;
      //   let value = action.payload.value
      //   let filteredValues = mock.filter(product => {
      //     return mock.assetName.toLowerCase().includes(value);
      // });
      let value = action.payload.value
      mock.filter(asset => {
            return asset.assetName.toLowerCase().includes(value);
       })
      .subscribe((asset) => {
        store.dispatch(createAsset(asset))
      })
      break;
     
      }
    default:
      break
  }
  return next(action)
}

export default assetsMiddleWare