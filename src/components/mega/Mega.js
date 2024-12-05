import React, {Component} from 'react';
import {Text} from 'react-native';
import estilo from '../estilo';

export default class Mega extends Component {
  render() {
    return (
      <Text style={estilo.textGrande}>
        Gerador de mega sena {this.props.qtdeNumeros}
      </Text>
    );
  }
}
