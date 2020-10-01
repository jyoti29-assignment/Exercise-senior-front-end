import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadAssets } from '../Redux-Actions/actions'
import Asset from "./Assets"

class AssetsTable extends React.Component {

  componentDidMount() {
    this.props.loadAssets()
  }

  filterByInput(e){
    let input = e.target.value;
    this.props.dispatch(filterByValue({value: input}))
}

sortByInput(e){
  let value = e.target.value;
  let direction = value.endsWith('asc') ? "asc" : "desc";

  if (value.startsWith('price')){
      this.props.dispatch(sortAssetsByPrice({direction}))
  }else {
      this.props.dispatch(sortAssetsByName({direction}));
  }
}

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.assetIds === this.props.assetIds){
      return false
    }
    return true
  }

  render() {
    let assets = this.props.state.filteredProducts;
    return (
      <div>
        <table className="main-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Asset name</th>
              <th>Price</th>
              <th>Last update</th>
              <th>Type</th>
            </tr>
            {assets.map(id => {
              return (
                <Asset
                  id={id}
                  key={id}>
                </Asset>
              )
            })}
          </thead>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  assetIds: Object.keys(state.assets),
})

const mapDispatchToProps = dispatch => ({
  loadAssets: () => dispatch(loadAssets())
})

AssetsTable.propTypes = {
  assets: PropTypes.array,
}

AssetsTable = connect(mapStateToProps, mapDispatchToProps)(AssetsTable)

export default AssetsTable
