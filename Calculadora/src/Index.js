import React from 'react';
import { View, Text } from 'react-native';
import Button from './components/Button';
import Display from './components/Display'

export default function Index() {
  state = {
    displayValue = '0'
  }
  
  return (
    <View>
      <Display text={this.state.displayValue}/>
      <View>
      <Button tripleWidth label="AC" onClick={} />
      <Button label="7" />
      <Button label="8" />
      <Button label="9" />
      <Button label="/" />
      <Button label="4" />
      <Button label="5" />
      <Button label="6" />
      <Button label="*" />
      <Button label="1" />
      <Button label="2" />
      <Button label="3" />
      <Button label="+" />
      <Button doubleWidth label="0" />
      <Button label="." />
      <Button label="=" />
      </View>
    </View>
  );
}
