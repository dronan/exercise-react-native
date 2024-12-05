import React, {Component} from 'react';
import {Button, Text, TextInput} from 'react-native';
import estilo from '../estilo';

export default class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: [],
  };

  alterarQtdeNumero = qtde => {
    this.setState({qtdeNumeros: +qtde});
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdeNumeros)
      .fill()
      .reduce(n => {
        const novoNumero = this.gerarNumeroNaoContido(n);
        return [...n, novoNumero];
      }, [])
      .sort((a, b) => a - b);

    this.setState({numeros});
  };

  gerarNumeroNaoContido = nums => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  render() {
    return (
      <>
        <Text style={estilo.textGrande}> {this.state.numeros.join(', ')} </Text>
        <Text style={estilo.textGrande}>Gerador de mega sena</Text>
        <TextInput
          keyboardType="numeric"
          style={{borderBottomWidth: 1}}
          placeholder="Qtde de Números"
          value={this.state.qtdeNumeros}
          onChangeText={this.alterarQtdeNumero}
        />
        <Button title="Gerar numeros" onPress={this.gerarNumeros}>
          Gerar numeros
        </Button>
      </>
    );
  }
}
