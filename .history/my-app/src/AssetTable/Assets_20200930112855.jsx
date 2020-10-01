import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Asset extends React.PureComponent {

  render() {
    return (
      <tr >
        <td>{this.props.asset.id}</td>
        <td>{this.props.asset.assetName}</td>
        <td>{this.props.asset.price}</td>
        <td>{this.props.asset.lastUpdate}</td>
        <td>{this.props.asset.assetType}</td>
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
