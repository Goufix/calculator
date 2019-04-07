import React from 'react'
import { Text, Dimensions, TouchableHighlight } from 'react-native'
import styles from '../styles/styles'

export default function Button(props) {
  const stylesArray = [styles.button]
  if (props.doubleWidth) {
    stylesArray.push(styles.doubleWidth)
  }
  if (props.tripleWidth) {
    stylesArray.push(styles.tripleWidth)
  }
  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesArray}>{props.label}</Text>
    </TouchableHighlight>
  )
}
