import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const img = require('./img.png');

// import H1 from './H1';

class App extends Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}>Hello, world!</Text>
        {/* <H1 /> */}
        <Image source={img} style={{ width: 100, height: 100 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold' }
});

export default App;
