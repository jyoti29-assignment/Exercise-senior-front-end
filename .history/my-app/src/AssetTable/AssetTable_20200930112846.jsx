import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadAssets } from '../actions'
import Asset from '../containers/Asset'

class AssetsTable extends React.Component {

  componentDidMount() {
    this.props.loadAssets()
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.assetIds === this.props.assetIds){
      return false
    }
    return true
  }

  render() {
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
            {this.props.assetIds.map(id => {
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
