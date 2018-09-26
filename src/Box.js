import styled from 'styled-components'
import PropTypes from 'prop-types'
import paramCase from 'param-case'

// TODO replace with better prop-type definitions
export const propTypes = {
  alignContent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alignItems: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alignSelf: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  border: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  boxShadow: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  boxSizing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  display: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  flexBasis: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  flexDirection: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  flexFlow: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  flexGrow: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  flexShrink: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  flexWrap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  justifyContent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  order: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  overflow: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  overflowX: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  overflowY: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  visibility: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export const Box = styled.div`
  ${(props) => Object.keys(propTypes)
    .filter((k) => props[k])
    .map((k) => `${paramCase(k)}: ${props[k]};`)
    .join('')}
`

Box.displayName = 'Box'
Box.propTypes = propTypes
Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box'
}

export default Box
