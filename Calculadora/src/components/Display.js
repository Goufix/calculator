import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/styles'

export default function Display(props) {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>
        {props.text}
      </Text>
    </View>
  )
}
