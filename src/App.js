import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import H1 from './H1';

const img = require('./img.png');

class App extends Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}>Hello, world!</Text>
        <H1 />
        <Image
          source={img}
          defaultSource={img}
          style={{ width: 100, height: 100 }}
        />
        <TouchableOpacity onPress={() => alert('aha')}>
          <Text>Button</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold' }
});

export default App;
