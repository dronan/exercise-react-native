import React from 'react';
import {StyleSheet, View} from 'react-native';

import Primeiro from './components/Primeiro';
import CompPadrao, {Comp1, Comp2} from './components/Multi';
import Aleatorio from './components/Aleatorio';
import MinMax from './components/MinMax';

export default () => {
  return (
    <View style={style.App}>
      <Aleatorio min={1} max={60} />
      <MinMax min={213} max={20} />
      <MinMax min={1} max={94} />
      {/* <CompPadrao />
      <Comp1 />
      <Comp2 />
      <Primeiro /> */}
    </View>
  );
};

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
