import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import UsuarioLogado from './components/UsuarioLogado';

export default () => {
  return (
    <SafeAreaView style={style.App}>
      <UsuarioLogado usuario={{nome: 'gui', email: 'gui@gui.com'}} />
      <UsuarioLogado usuario={{nome: 'pedro', email: 'pedro@gui.com'}} />
      <UsuarioLogado usuario={{nome: 'julia'}} />
      <UsuarioLogado usuario={null} />
      <UsuarioLogado usuario={{email: 'julia@gui.com'}} />
      <UsuarioLogado usuario={{nome: 'fe', email: 'fe@gui.com'}} />
      <UsuarioLogado usuario={{nome: 'lari', email: 'lari@gui.com'}} />
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
