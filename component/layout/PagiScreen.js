import React from 'react';
import { Button, View } from 'react-native';


export default class PagiScreen extends React.Component {
  static navigationOptions = {
    title: 'Dzikir Pagi',
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Halaman Dzikir Pagi</Text>
      </View>
    );
  }
}