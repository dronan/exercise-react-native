import React from 'react';
import Filho from './Filho';
import {Text} from 'react-native';
import estilo from '../estilo';

export default props => {
  const [numero, setNumero] = React.useState(0);
  const [texto, setTexto] = React.useState('');

  function exibirValor(numero, texto) {
    setNumero(numero);
    setTexto(texto);
  }

  return (
    <>
      <Text style={estilo.textGrande}>
        {texto} {numero}
      </Text>
      <Filho min={1} max={60} funcao={exibirValor} />
    </>
  );
};
