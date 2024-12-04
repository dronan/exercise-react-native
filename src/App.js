import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import FlexboxV4 from './components/layout/FlexboxV4';

export default () => {
  return (
    <SafeAreaView style={style.App}>
      <FlexboxV4 />
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
