import React from 'react';
import {Button} from 'react-native';

export default () => {
  function executar() {
    console.warn('Exec!!!');
  }

  return (
    <>
      <Button title="Executar!" onPress={executar}></Button>
      <Button title="Executar!" onPress={() => console.warn('Arrow')}></Button>
      <Button
        title="Executar!"
        onPress={function () {
          console.log('function');
        }}></Button>
      ;
    </>
  );
};
