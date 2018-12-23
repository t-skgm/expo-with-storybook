import * as React from 'react'
import { TouchableHighlight, TouchableHighlightProps } from 'react-native'

const Button: React.FunctionComponent<TouchableHighlightProps> = ({ children, ...passProps }) => {
  return <TouchableHighlight {...passProps}>{children}</TouchableHighlight>
}

export default Button
