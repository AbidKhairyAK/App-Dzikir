import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { View,TouchableOpacity,Image,StyleSheet, Text, Linking } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import PagiScreen from './PagiScreen';
import SoreScreen from './SoreScreen';
import DoaScreen from './DoaScreen';
import SugroPagiScreen from './SugroPagiScreen';
import SugroSoreScreen from './SugroSoreScreen';
import KubroPagiScreen from './KubroPagiScreen';
import KubroSoreScreen from './KubroSoreScreen';
import DetailDoa from './DetailDoa';
import About from './About';


class HomeScreen extends Component {

  static navigationOptions = {
    header:null
  };

  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  showMenu = () => {
    this._menu.show();
  };

  hideMenu = () => {
    this._menu.hide();
  };

  // _hideTextMenu = () => {
  //   this.setState({
      
  //   })
  // }

// warna dasar - 162e40
  
  render() {
    return (
      <View style={{flex: 1,backgroundColor:'#ecf2f5' }}>
        <Header style={{backgroundColor:'#00dfbe'}}>
          <Left>
            <Button transparent>
            <Menu
              style={styles.menuSetting}
              ref={this.setMenuRef}
              button=
              {
                <TouchableOpacity onPress={this.showMenu}>
                  <Icon style={{fontWeight:'bold', fontSize:30}} name='menu' />
                </TouchableOpacity>
              }
            >
              <MenuItem 
                onPress={() => {
                  this.props.navigation.navigate('About');
                }}
              >About</MenuItem>
              <MenuItem 
                onPress={ ()=> Linking.openURL('http://pondokinformatika.com') }
              >Kunjungi Kami</MenuItem>
            </Menu>
              
            </Button>
          </Left>
          <Body>
            <Title style={styles.textHeader}>Dzikir Pagi & Petang</Title>
          </Body>
        </Header>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#ecf2f5' }}>
        <TouchableOpacity 
          onPress={() => {
            this.props.navigation.navigate('Pagi', {
              itemId: 86,
              status: true,
            });
          }}
          underlayColor="white">
          <View>
          <Image
            style={{width: 140, height: 140}}
            source={require('../images/pagi.png')}
          />
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => {
            this.props.navigation.navigate('Sore', {
              itemId: 86,
            });
          }}
          underlayColor="white">
          <View>
          <Image
            style={{width: 140, height: 140}}
            source={require('../images/sore.png')}
          />
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => {
            this.props.navigation.navigate('Doa', {
              itemId: 86,
            });
          }}
          underlayColor="white">
          <View>
          <Image
            style={{width: 140, height: 140}}
            source={require('../images/doa.png')}
          />
          </View>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuSetting: {
    marginTop: 27,
    borderRadius:0
  },
  textHeader:{
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 0,
    letterSpacing: 2,
    marginLeft:-40
  }
});