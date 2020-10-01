import { LOAD_ASSETS, createAsset } from '../actions'
import 'rxjs/add/operator/filter'
import { mock } from '../mock'

const MiddleWare = store => next => action => {
  switch(action.type) {
    case LOAD_ASSETS:
      mock
        .filter(asset => asset.id < 400)
        .subscribe((asset) => {
          store.dispatch(createAsset(asset))
        })
      break
    default:
      break
  }
  return next(action)
}

export default MiddleWare