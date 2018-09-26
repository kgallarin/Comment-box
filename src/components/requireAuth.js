import React, { Component } from 'react'
import { connect } from 'react-redux'

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount () {
      this.shouldNavigateAway()
    }
    componentDidUpdate() {
      this.shouldNavigateAway()
    }
    shouldNavigateAway = () => {
      const { auth } = this.props
      if(!auth){
        console.log('i need to leave')
        this.props.history.push('/')
      }
    }
    render () {
      return <ChildComponent {...this.props} />
    }
  }

  const mapStateToProps = state => {
    const { auth } = state
    return {
      auth
    }
  }
  return connect(mapStateToProps)(ComposedComponent)
}
