import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

class CommentBox extends Component {
  state = {
    comment: ''
  }
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
  handleChange = (e) => {
    this.setState({ comment: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if(e.target.elements.addComment.value !== ''){
      this.props.saveComment(this.state.comment)
    }

    this.setState({ comment: '' })
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea name="addComment" onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit a comment</button>
          </div>
        </form>

        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch comments</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { auth } = state
  return {
    auth
  }
}

export default connect(mapStateToProps,actions)(CommentBox)
