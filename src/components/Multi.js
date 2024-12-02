import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default function CompPadrao() {
  return <Text style={Estilo.textGrande}>CompPadrao!</Text>;
}

export function Comp1() {
  return <Text style={Estilo.textGrande}>Comp1!</Text>;
}

export function Comp2() {
  return <Text style={Estilo.textGrande}>Comp2!</Text>;
}
