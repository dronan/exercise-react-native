import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default props => {
  const {min, max} = props;
  const resultado = parseInt(Math.random() * (max - min + 1) + min);
  return <Text style={Estilo.textGrande}>Valor aleatorio {resultado}!</Text>;
};
