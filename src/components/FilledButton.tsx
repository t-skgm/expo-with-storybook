import * as React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

export const FilledButton: React.FunctionComponent<TouchableOpacityProps> = ({ children, ...passProps }) => (
  <TouchableOpacity {...passProps} style={{backgroundColor: 'blue', paddingVertical: 8, paddingHorizontal: 10}}>
    {children}
  </TouchableOpacity>
)
