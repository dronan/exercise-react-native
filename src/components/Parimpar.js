import React from 'react';
import {Text, View} from 'react-native';
import estilo from './estilo';

export default props => {
  return (
    <View>
      <Text style={estilo.textGrande}>O resultado é:</Text>
      {props.num % 2 === 0 ? (
        <Text style={estilo.textGrande}>Par</Text>
      ) : (
        <Text style={estilo.textGrande}>Impar</Text>
      )}
    </View>
  );
};
