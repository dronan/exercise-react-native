import React from 'react';
import {Text} from 'react-native';
import estilo from '../estilo';

export default props => {
  return (
    <>
      <Text style={estilo.textGrande}>{props.a}</Text>
      <Text style={estilo.textGrande}>{props.b}</Text>
    </>
  );
};
