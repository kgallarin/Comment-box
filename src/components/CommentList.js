import React, { Component } from 'react'
import { connect } from 'react-redux'

class CommentList extends Component {
  renderComments = () => {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>
    })
  }
  render() {
    return (
      <div>
        <h4>List of Comments</h4>
        {this.renderComments()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { comments } = state
  return {
    comments
  }
}

export default connect(mapStateToProps,null)(CommentList)
