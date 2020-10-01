import { CREATE_ASSET, FILTER_BY_VALUE } from '../Redux-Actions/actions';
import { mock } from '../resource'

const initialState = {
  searchTerm: '',
  assets: mock
}
const assets = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ASSET:
      return {
        ...state,
        [action.payload.id]: { ...state[action.payload.id], ...action.payload }
      }
      case FILTER_BY_VALUE:
        debugger;
        const searchTerm  = action.payload.value;
        return {
          ...state,
          searchTerm: searchTerm,
          projects: searchTerm
              ? Projects.filter(
                  projects =>
                  projects.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >
                  -1,
              )
              : Projects,
          };
        
        
    default:
      return state
  }
}

export default assets