import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import FlexboxV1 from './components/layout/FlexboxV1';

export default () => {
  return (
    <SafeAreaView style={style.App}>
      <FlexboxV1 />
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
