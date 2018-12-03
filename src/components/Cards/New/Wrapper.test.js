import React from 'react'
import { mount } from 'enzyme'
import CardsNewWrapper from './Wrapper'

describe('Title Field', () => {
  test('exists', () => {
    const input = mount(<CardsNewWrapper />).find('input#title')
    expect(input.exists()).toBeTruthy()
  })

  test('updates the form field', () => {
    // Check on wrapper state
    const wrapper = mount(<CardsNewWrapper />)
    const state = wrapper.state('form')
    expect(Object.keys(state.values)).toHaveLength(0)

    // Field from the informed library
    const title = wrapper.find('Field#title')
    expect(title.prop('fieldState').value).toBe(undefined)

    // Retrieve the onChange function
    const update = title.find('input#title').prop('onChange')
    update({ target: { value: 'My Title' } })

    // Check overall state
    expect(Object.keys(state.values)).toHaveLength(1)
    expect(state.values.title).toEqual('My Title')

    // Go through the fieldApi and retrieve its current value
    expect(title.props().fieldApi.getValue()).toEqual('My Title')
  })
})
