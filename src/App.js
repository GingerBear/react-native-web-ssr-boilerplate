import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import H1 from './H1';
import Art from './Art';

const img = require('./img.png');

class App extends Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}>Hello, world!</Text>
        <H1 />
        <Button title="Press Me" color="red" onPress={() => alert('aha')} />
        <Image
          source={img}
          defaultSource={img}
          style={{ width: 100, height: 100 }}
        />
        <Art />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold' }
});

export default App;
