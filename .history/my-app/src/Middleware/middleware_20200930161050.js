import { LOAD_ASSETS, createAsset, filterByValue } from '../Redux-Actions/actions'
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
      let value = this.action.val;
      store.dispatch(filterByValue(value));
        break
    default:
      break
  }
  return next(action);
}

export default assetsMiddleWare