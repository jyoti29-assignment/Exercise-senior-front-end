import { LOAD_ASSETS, createAsset, filterByValue, FILTER_BY_VALUE } from '../Redux-Actions/actions'
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
    case FILTER_BY_VALUE:
      let val = action.payload.value;
      mock
        .filter(asset => asset.id < 400)
        .subscribe((asset) => {
          store.dispatch(filterByValue(val))
        })
      debugger;
        break
    default:
      break
  }
  return next(action);
}

export default assetsMiddleWare