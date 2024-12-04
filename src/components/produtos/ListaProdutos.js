import React from 'react';
import {Text} from 'react-native';
import estilo from '../estilo';
import produtos from './Produto';

export default props => {
  function lista() {
    return produtos.map(p => {
      return (
        <Text key={p.id}>
          {p.id} {p.nome} custa {p.preco}
        </Text>
      );
    });
  }
  return (
    <>
      <Text style={estilo.textGrande}>Lista de produtos</Text>
      {lista()}
    </>
  );
};
