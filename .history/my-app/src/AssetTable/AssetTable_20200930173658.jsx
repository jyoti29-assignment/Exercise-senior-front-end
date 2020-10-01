import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadAssets } from '../Redux-Actions/actions'
import { filterByValue } from '../Redux-Actions/actions'
import Asset from './Assets'

class AssetsTable extends React.Component {

  constructor(props) {
    debugger;
    super(props);
    this.state = {
      projects: this.props.assetIds
    }
  }

  componentDidMount() {
    this.props.loadAssets()
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.assetIds === this.props.assetIds){
      return false
    }
    return true
  }

  filterByInput(e){
    debugger;
    let input = e.target.value;
    this.props.filterByValue({value: input});
}

  render() {
    return (
      <div>
       <div className='control' style={{minWidth: "300px"}}>
                                    <input onChange={e => {
                                        this.filterByInput(e);
                                    }} style={{width: "100%"}} placeholder='Filter by' type='text'/>
                                </div>
        <table id="t01">
        <caption>Asset Table</caption>
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
  loadAssets: () => dispatch(loadAssets()),
  filterByValue: (val) => dispatch(filterByValue(val))
})

AssetsTable.propTypes = {
  assets: PropTypes.array,
}

AssetsTable = connect(mapStateToProps, mapDispatchToProps)(AssetsTable)

export default AssetsTable
