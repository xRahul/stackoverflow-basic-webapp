import React from 'react'
import LoadingOverlay from 'react-loading-overlay'
import PacmanLoader from 'react-spinners/PacmanLoader'

export default class Loader extends React.Component {

  render() {
    return (
      <LoadingOverlay
        active={true}
        spinner={<PacmanLoader color={'#36D7B7'} />}
      />
    )
  }
}