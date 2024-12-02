import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default param => {
  console.warn(param);
  const {min, max} = param;
  const resultado = min > max ? 'maior' : 'menor';
  return (
    <Text style={Estilo.textGrande}>
      O valor {min} é {resultado} que {max}!
    </Text>
  );
};
