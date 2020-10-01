import { LOAD_ASSETS, createAsset, FILTER_BY_VALUE, filterByValue } from '../Redux-Actions/actions'
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
      case FILTER_BY_VALUE: 
      debugger;
      let value = action.payload.val
      mock
      .filter(asset => asset.id < 400)
      .subscribe((asset) => {
        store.dispatch(filterByValue(value))
      })
      break
      
    default:
      break
  }
  return StaticRange;
}

export default assetsMiddleWare