import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

export default props => {
  const [nome, setNome] = useState('teste');
  return (
    <View>
      <Text>{nome}</Text>
      <TextInput
        value={nome}
        placeholder="Digite seu nome..."
        onChangeText={nome => setNome(nome)}
      />
    </View>
  );
};
