import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import estilo from '../estilo';

export default ({num}) => {
  return (
    <View style={style.Container}>
      <Text style={[estilo.textGrande, style.Num]}>{num}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  Container: {
    height: 50,
    width: 50,
    backgroundColor: '#000',
    margin: 5,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Num: {
    color: '#FFF',
    textAlign: 'center',
  },
});
