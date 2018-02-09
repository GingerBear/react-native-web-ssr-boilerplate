import React, { Component } from 'react';
import { Text } from 'react-native';

class H1 extends Component {
  render() {
    return <Text>H1 on web: {this.props.name}</Text>;
  }
}

export default H1;
