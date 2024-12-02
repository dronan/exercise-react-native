import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import estilo from './estilo';

export default props => {
  const [n, setN] = useState(props.inicial);
  const inc = () => setN(n + 1);
  const dec = () => setN(n - 1);

  return (
    <>
      <Text style={estilo.textGrande}>{n}</Text>
      <Button title="+" onPress={inc}></Button>
      <Button title="-" onPress={dec}></Button>
    </>
  );
};
