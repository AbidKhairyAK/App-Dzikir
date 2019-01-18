import React from 'react';
import {Icon} from 'native-base';
import { View,TouchableOpacity,Image, Text } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class SoreScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Dzikir Pagi & Petang',
    headerStyle: {
      backgroundColor: '#00dfbe'
    },
    headerTitleStyle: {
        fontFamily: 'SourceSansPro',
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 0,
        flex: 1,
        letterSpacing: 2,
      },
    headerTintColor: '#FFFFFF',
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#ecf2f5' }}>
        <TouchableOpacity 
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
        </TouchableOpacity>
        <TouchableOpacity 
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
        </TouchableOpacity>
      </View>
    );
  }
}