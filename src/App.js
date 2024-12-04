import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import FlexboxV2 from './components/layout/FlexboxV2';

export default () => {
  return (
    <SafeAreaView style={style.App}>
      <FlexboxV2 />
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
