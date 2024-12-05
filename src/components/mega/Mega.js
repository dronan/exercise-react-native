import React, {Component} from 'react';
import {Text, TextInput} from 'react-native';
import estilo from '../estilo';

export default class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
  };

  alterarQtdeNumero = qtde => {
    this.setState({qtdeNumeros: qtde});
  };

  render() {
    return (
      <>
        <Text style={estilo.textGrande}>
          Gerador de mega sena {this.state.qtdeNumeros}
        </Text>
        <TextInput
          keyboardType="numeric"
          style={{borderBottomWidth: 1}}
          placeholder="Qtde de Números"
          value={this.state.qtdeNumeros}
          onChangeText={this.alterarQtdeNumero}
        />
      </>
    );
  }
}
