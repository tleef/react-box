import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Box from '../src/Box'

test('Box renders correctly', () => {
  const tree = renderer.create(<Box />).toJSON()

  expect(tree).toMatchSnapshot()
})