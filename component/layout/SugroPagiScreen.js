import React from 'react';
import {Icon} from 'native-base';
import { View,TouchableHighlight,Image, Text } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class SugroPagiScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Dzikir Pagi Praktis',
    headerStyle: {
      backgroundColor: '#00dfbe'
    },
    headerTintColor: '#FFFFFF',
    headerRight: (
      <Icon 
        name="md-more"
        style={{ paddingRight: 16, color: 'white' }}
      />
    ),
  };
  
    render() {
      const { navigation } = this.props;
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Halaman Sugros</Text>
        </View>
      );
    }
  }