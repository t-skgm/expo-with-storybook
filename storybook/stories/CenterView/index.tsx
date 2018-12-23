import * as React from 'react'
import { View, ViewProps } from 'react-native'
import style from './style'

const CenterView: React.FunctionComponent<ViewProps> = ({ children, ...passProps }) => {
  return (
    <View style={style.main} {...passProps}>
      {children}
    </View>
  )
}

export default CenterView
