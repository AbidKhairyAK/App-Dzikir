import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Dzikir Pagi & Petang',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#162e40' }}>
        <Button
          title="Pagi"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
            });
          }}
        />
        <Button
          title="Petang"
          onPress={() => {
            this.props.navigation.navigate('Sore', {
              itemId: 86,
            });
          color='black'
          }}
        />
        <Button
          title="Doa Harian"
          onPress={() => {
            this.props.navigation.navigate('Doa', {
              itemId: 86,
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Dzikir Pagi',
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#e5e4e5' }}>
        <Text>Dzikir Pagi</Text>
      </View>
    );
  }
}

class SoreScreen extends React.Component {
  static navigationOptions = {
    title: 'Dzikir Sore',
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#e5e4e5' }}>
        <Text>Dzikir Sore</Text>
      </View>
    );
  }
}

class DoaScreen extends React.Component {
  static navigationOptions = {
    title: 'Doa Harian',
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#e5e4e5' }}>
        <Text>Halaman Doa</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Sore: SoreScreen,
    Doa: DoaScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
