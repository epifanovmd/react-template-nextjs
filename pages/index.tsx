import React from 'react'
import { connect } from 'react-redux'
import { AppContainer } from "../components/counter/container";
import Head from 'next/head'

class Index extends React.Component {

  render () {
    return (
        <div>
            <Head>
                <title>Next App</title>
                <meta name="title" content={"Next App"} />
                <meta name="description" content={"Next App"}  />
            </Head>
            <AppContainer />
        </div>
    )
  }
}
export default connect()(Index)
