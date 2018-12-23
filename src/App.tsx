import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FilledButton } from './components/FilledButton'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <FilledButton onPress={() => alert('boom!')}>
          <Text style={{color: 'white'}}>Button</Text>
        </FilledButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
