import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ListaProdutos from './components/produtos/ListaProdutos';

export default () => {
  return (
    <SafeAreaView style={style.App}>
      <ListaProdutos />
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
