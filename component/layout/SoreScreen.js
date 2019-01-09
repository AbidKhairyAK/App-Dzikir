import React from 'react';
import {Icon} from 'native-base';
import { View,TouchableHighlight,Image, Text } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class SoreScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Dzikir Pagi & Petang',
    headerStyle: {
      backgroundColor: '#00dfbe'
    },
    headerTintColor: '#FFFFFF',
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#ecf2f5' }}>
        <TouchableHighlight 
          onPress={() => {
            this.props.navigation.navigate('Sugrosore', {
              itemId: 86,
            });
          }}
          underlayColor="white">
          <View>
          <Image
            style={{width: 160, height: 50, margin:15}}
            source={require('../images/praktis.png')}
          />
          </View>
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={() => {
            this.props.navigation.navigate('Kubrosore', {
              itemId: 86,
            });
          }}
          underlayColor="white">
          <View>
          <Image
            style={{width: 160, height: 50}}
            source={require('../images/lengkap.png')}
          />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}