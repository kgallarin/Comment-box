import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />)
})

afterEach(() => {
  wrapped.unmount()
})

it('has a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})

describe('the text area', () => {                 //  wrapping up the test code block to use more before each to prevent code duplicates
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    })
    wrapped.update()                              // Forces a re-render
  })

  it('has a textarea that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  })

  it('has a form submission', () => {
    wrapped.find('form').simulate('submit')
    wrapped.update() // Forces a re-render


    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})
