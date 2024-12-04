import React from 'react';
import {StyleSheet, View} from 'react-native';

export default props => {
  return (
    <View style={style.FlexV4}>
      <View style={style.V0}></View>
      <View style={style.V1}></View>
      <View style={style.V2}></View>
    </View>
  );
};

const style = StyleSheet.create({
  FlexV4: {
    width: 100,
    backgroundColor: '#000',
    flexGrow: 1,
  },
  V0: {
    backgroundColor: '#00F',
    height: 500,
  },
  V1: {
    backgroundColor: '#F00',
    flexGrow: 9,
  },
  V2: {
    backgroundColor: '#0F0',
    flexGrow: 1,
  },
});
