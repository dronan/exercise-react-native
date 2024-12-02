import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Titulo from './components/Titulo';
import Primeiro from './components/Primeiro';
import CompPadrao, {Comp1, Comp2} from './components/Multi';
import Aleatorio from './components/Aleatorio';
import MinMax from './components/MinMax';
import Botao from './components/Botao';
import Contador from './components/Contador';
import Pai from './components/indireta/Pai';
import ContadorV2 from './components/contador/ContadorV2';
import Diferenciar from './components/Diferenciar';
import Parimpar from './components/Parimpar';

export default () => {
  return (
    <SafeAreaView style={style.App}>
      <Parimpar num={3} />
      {/*  <Diferenciar />
      <ContadorV2 />
    <Pai /> 
    <Contador inicial={100} />
     <Botao />
      <Titulo titulo="Titulo principal" subtitulo="Aqui vai o subtitulo" />
      <Aleatorio min={1} max={60} />
      <MinMax min={213} max={20} />
      <MinMax min={1} max={94} />
      <CompPadrao />
      <Comp1 />
      <Comp2 />
      <Primeiro /> */}
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
