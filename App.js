import React from 'react';
import {Icon} from 'native-base';
import { View,TouchableHighlight,Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import PagiScreen from './component/layout/PagiScreen';
import SoreScreen from './component/layout/SoreScreen';
import DoaScreen from './component/layout/DoaScreen';
import SugroPagiScreen from './component/layout/SugroPagiScreen';
import SugroSoreScreen from './component/layout/SugroSoreScreen';
import KubroPagiScreen from './component/layout/KubroPagiScreen';
import KubroSoreScreen from './component/layout/KubroSoreScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerLeft: (
      <Icon 
        name="menu"
        style={{ paddingLeft: 16, color: 'white' }}
      />
    ),
    headerTitle: 'Dzikir Pagi & Petang',
    headerStyle: {
      backgroundColor: '#00dfbe'
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      fontWeight: 'bold',
      justifyContent: 'space-between',
      alignSelf: 'center',
      flex: 1,
      flexGrow: 1
    },
    headerRight: (
      <Icon 
        name="md-more"
        style={{ paddingRight: 16, color: 'white' }}
      />
    ),
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
            style={{width: 140, height: 140}}
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
            style={{width: 140, height: 140}}
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
            style={{width: 140, height: 140}}
            source={require('./component/images/doa.png')}
          />
          </View>
        </TouchableHighlight>
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
    Sugropagi: SugroPagiScreen,
    Sugrosore: SugroSoreScreen,
    Kubropagi: KubroPagiScreen,
    Kubrosore: KubroSoreScreen,
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

