import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Familia from './components/relacao/Familia';
import Membro from './components/relacao/Membro';

export default () => {
  return (
    <SafeAreaView style={style.App}>
      <Familia>
        <Membro nome="Bia" sobrenome="Arruda" />
        <Membro nome="Carlos" sobrenome="Arruda" />
      </Familia>
      <Familia>
        <Membro nome="Julia" sobrenome="Silva" />
        <Membro nome="Pedro" sobrenome="Silva" />
        <Membro nome="Gui" sobrenome="Silva" />
        <Membro nome="Fernando" sobrenome="Silva" />
      </Familia>
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
