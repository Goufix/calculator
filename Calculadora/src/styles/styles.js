import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { wrap } from 'module';

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231'
  },
  doubleWidth: {
    width: (Dimensions.get('window').width / 4) * 2
  },
  tripleWidth: {
    width: (Dimensions.get('window').width / 4) * 3
  },
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'flex-end'
  },
  displayValue: {
    fontSize: 40,
    color: '#FFF'
  }
});
export default styles;
