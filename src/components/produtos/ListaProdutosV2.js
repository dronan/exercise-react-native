import React from 'react';
import {Text, FlatList} from 'react-native';
import estilo from '../estilo';
import produtos from './Produto';

export default props => {
  const produtoRender = ({item: p}) => {
    return (
      <Text>
        {p.id} {p.nome} {p.preco}
      </Text>
    );
  };
  return (
    <>
      <Text style={estilo.textGrande}>Lista de produtos v2</Text>
      <FlatList
        data={produtos}
        keyExtractor={i => i.id}
        renderItem={produtoRender}
      />
    </>
  );
};
