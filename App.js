import React from 'react';
import { Button, View, Text,TouchableHighlight,Alert,Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Dzikir Pagi & Petang',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#162e40' }}>
        <TouchableHighlight 
          onPress={() => {
            this.props.navigation.navigate('Pagi', {
              itemId: 86,
            });
          }}
          underlayColor="white">
          <View>
          <Image
            style={{width: 150, height: 150}}
            source={require('./component/images/pagi.png')}
          />
          </View>
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={() => {
            this.props.navigation.navigate('Sore', {
              itemId: 86,
            });
          }}
          underlayColor="white">
          <View>
          <Image
            style={{width: 150, height: 150}}
            source={require('./component/images/sore.png')}
          />
          </View>
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={() => {
            this.props.navigation.navigate('Doa', {
              itemId: 86,
            });
          }}
          underlayColor="white">
          <View>
          <Image
            style={{width: 150, height: 150}}
            source={require('./component/images/doa.png')}
          />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

class PagiScreen extends React.Component {
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

class SoreScreen extends React.Component {
  static navigationOptions = {
    title: 'Dzikir Sore',
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Halaman Dzikir Sore</Text>
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

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Halaman Doa</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Pagi: PagiScreen,
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

