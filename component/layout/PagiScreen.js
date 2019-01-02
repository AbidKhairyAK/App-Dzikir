import React from 'react';
import {Icon} from 'native-base';
import { View,TouchableHighlight,Image, Text } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class PagiScreen extends React.Component {
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#162e40' }}>
        <TouchableHighlight 
          onPress={() => {
            this.props.navigation.navigate('Sugropagi', {
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
            this.props.navigation.navigate('Kubropagi', {
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