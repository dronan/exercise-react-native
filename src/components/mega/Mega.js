import React, {Component} from 'react';
import {Text, TextInput} from 'react-native';
import estilo from '../estilo';

export default class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
  };

  constructor(props) {
    super(props);
  }

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
          placeholder="Qtde de Números"
          value={this.state.qtdeNumeros}
          onChangeText={texto => this.alterarQtdeNumero(texto)}
        />
      </>
    );
  }
}
