import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import DigiteSeuNome from './components/DigiteSeuNome';

export default () => {
  return (
    <SafeAreaView style={style.App}>
      <DigiteSeuNome />
    </SafeAreaView>
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
