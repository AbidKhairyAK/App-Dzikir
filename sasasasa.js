import React from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { View,TouchableHighlight,Image,StyleSheet,ScrollView } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import DzikirPagiSugro from '../../data/DzikirPagiSugro';


export default class SugroPagiScreen extends React.Component {
  static navigationOptions = {
    // headerTitle: 'Dzikir Pagi Praktis',
    //   headerTitleStyle: {
    //     fontFamily: 'SourceSansPro',
    //     fontWeight: 'bold',
    //     fontSize: 20,
    //     marginHorizontal: 0,
    //     flex: 1,
    //     letterSpacing: 2,
    //   },
    //   headerStyle: {
    //     backgroundColor: '#00dfbe'
    //   },
    //   headerTintColor: '#FFFFFF',
    header:null
  };

  constructor(){
    super();
    this.state = {
      status:true
    };
  }

  HiddeTextTerjemah = () => {
    if (this.state.status == true) 
    {
      this.setState({status:false})
    }
    else 
    {
      this.setState({status:true})
    }
  }

   _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  showMenu = () => {
    this._menu.show();
  };
  
    render() {
      const { navigation } = this.props;
  
      return (
        <View style={{flex:1, backgroundColor:'#ecf2f5'}}>
        <Header style={{backgroundColor:'#00dfbe'}}>
          <Left>
            <Button transparent>
            <Menu
              style={styles.menuSetting}
              ref={this.setMenuRef}
              button=
              {
                <Text onPress={this.showMenu}>
                  <Icon style={{fontWeight:'bold', fontSize:30}} name='menu' />
                </Text>
              }
            >
              <MenuItem>About</MenuItem>
              <MenuItem>Kunjungi Kami</MenuItem>
            </Menu>
              
            </Button>
          </Left>
          <Body>
            <Title style={styles.textHeader}>Dzikir Pagi & Petang</Title>
          </Body>
        </Header>
          <ScrollView style={{flex:2, margin:15}}>
            <View style={{backgroundColor:'#ffffff'}}>
              <Text style={styles.textJudul}>Dzikir Pagi Praktis</Text>
            </View>
            {DzikirPagiSugro.map((sugro, index) =>
              <View key={index} style={{backgroundColor:'#ffffff', marginTop:10, padding:12}}>
                <Text style={styles.textJudul}>{sugro.headerTitle}</Text>
                <Text style={styles.textArab}>{sugro.arab}</Text>
                {

                  this.state.status ? <Text style={styles.textArabLatin}>{sugro.arablatin}</Text> : null
                }
                {
                  this.state.status ? <Text style={styles.textTerjemah}>{sugro.terjemah}k</Text> : null
                }
              </View>
            )}
          </ScrollView>
        </View>
      );
    }
  }


const styles = StyleSheet.create({
 textJudul: {
    padding:7,
    fontSize:17,
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#666666'
 },
 textArab: {
    fontSize:30,
    fontFamily: 'lotus-linotype-light',
    color:'#333333',
    marginTop:5
 },
 textArabLatin: {
    lineHeight:20,
    marginTop: 10,
    fontStyle:'italic',
    color:'#666666',
    fontFamily: 'SourceSansPro',
    fontSize: 13,
 },
 textTerjemah: {
    lineHeight:20,
    fontFamily: 'SourceSans',
    marginTop:10,
    fontSize:15,
    color:'#333333',
    paddingBottom: 10
 },
})