import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default props => {
  return (
    <>
      <Text style={Estilo.textGrande}>{props.titulo}!</Text>;
      <Text style={Estilo.textPequeno}>{props.subtitulo}!</Text>;
    </>
  );
};
