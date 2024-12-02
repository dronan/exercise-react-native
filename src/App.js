import React from 'react';
import {StyleSheet, View} from 'react-native';

import Primeiro from './components/Primeiro';
import CompPadrao, {Comp1, Comp2} from './components/Multi';

export default () => {
  return (
    <View style={style.App}>
      <CompPadrao />
      <Comp1 />
      <Comp2 />
      <Primeiro />
    </View>
  );
};

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
