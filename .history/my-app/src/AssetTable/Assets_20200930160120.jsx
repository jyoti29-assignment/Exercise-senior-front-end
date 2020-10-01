import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Asset extends React.PureComponent {

  render() {
    debugger;
    return (
      <tr >
        <td>{this.props.asset.id}</td>
        <td>{this.props.asset.assetName}</td>
        <td>{this.props.asset.price}</td>
        <td>{new Date(this.props.asset.lastUpdate).toUTCString()}</td>
        <td>{this.props.asset.type}</td>
      </tr>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  asset: state.assets[ownProps.id]
})

Asset.propTypes = {
  id: PropTypes.string.isRequired,
}

Asset = connect(mapStateToProps)(Asset)

export default Asset
