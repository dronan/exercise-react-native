import React from 'react';
import {Button} from 'react-native';

export default props => {
  function gerarNumero(min, max) {
    const fator = max - min + 1;
    return parseInt(Math.random() * fator) + min;
  }

  return (
    <Button
      title="Executar"
      onPress={() => {
        const n = gerarNumero(props.min, props.max); // gera um numero aleatorio com os valores de props passados pelo pai
        props.funcao(n, 'O valor é: '); // passo o valor final para a função do componente pai que vai atualizar o estado e exibir o valor
      }}></Button>
  );
};
