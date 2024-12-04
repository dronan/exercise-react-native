import React from 'react';
import {StyleSheet, View} from 'react-native';
import Quadrado from './Quadrado';

export default props => {
  return (
    <View style={style.FlexV1}>
      <Quadrado cor="#F00" />
      <Quadrado cor="#0F0" />
      <Quadrado cor="#00F" />
      <Quadrado cor="#CC0" />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV1: {
    backgroundColor: '#000',
    flexGrow: 1,
    justifyContent: 'space-around',
  },
});
