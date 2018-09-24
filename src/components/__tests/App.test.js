import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />)
})

it('it shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('it shows a Comment List!', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})
