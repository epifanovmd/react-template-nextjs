import React from 'react'
import { connect } from 'react-redux'
import { AppContainer } from "../components/counter/container";
class Index extends React.Component {

  render () {
    return (
        <div>
            <AppContainer />
        </div>
    )
  }
}
export default connect()(Index)
