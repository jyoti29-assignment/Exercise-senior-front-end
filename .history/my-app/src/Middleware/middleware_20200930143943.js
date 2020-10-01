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
      case FILTER_BY_VALUE: 
      debugger;
      //store.getState().assets=store.getState().assets[0]
        let value = action.payload.value
        let filteredValues = mock.filter(product => {
          return product.name.toLowerCase().includes(value) ||
              product.designer.toLowerCase().includes(value);
      });
      break
      
    default:
      break
  }
  return next(action)
}

export default assetsMiddleWare