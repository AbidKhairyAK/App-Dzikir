import React, {Component} from 'react';
import {Icon} from 'native-base';
import { View,TouchableOpacity,Image,StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import PagiScreen from './component/layout/PagiScreen';
import SoreScreen from './component/layout/SoreScreen';
import DoaScreen from './component/layout/DoaScreen';
import SugroPagiScreen from './component/layout/SugroPagiScreen';
import SugroSoreScreen from './component/layout/SugroSoreScreen';
import KubroPagiScreen from './component/layout/KubroPagiScreen';
import KubroSoreScreen from './component/layout/KubroSoreScreen';
import DetailDoa from './component/layout/DetailDoa';
import SettingMenu from './component/fitur/SettingMenu';
import About from './component/layout/About';


class HomeScreen extends Component {

  ButtonHandler(id){
    this.props.navigation.setParams({
      hideSetting: true,
      isOpen: this.props.navigation.getParam('isOpen', false) == id ? false : id,
    });
    this.scroller.scrollTo({x: 0, y: (101.7 * id) - 101.7});
  }


  static navigationOptions =  ({navigation}) => {
    settingButtonHandler = () => {
      hideSetting = navigation.getParam('hideSetting', true);
      navigation.setParams({hideSetting: !hideSetting});
    }

    settingButton = (
      <TouchableOpacity 
        style={styles.headerButton}
        onPress={settingButtonHandler}
      >
        <Icon name='menu' style={styles.headerIcon}/>
      </TouchableOpacity>
    );

    return {
      headerLeft: navigation.getParam('headerLeft', settingButton),
      headerTitle: 'Dzikir Pagi & Petang',
      headerStyle: {
        backgroundColor: '#00dfbe'
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontFamily: 'SourceSansPro',
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 0,
        flex: 1,
        letterSpacing: 2,
      },
    }
  };

// warna dasar - 162e40
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#ecf2f5' }}>
        <TouchableOpacity 
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
            source={require('./component/images/sore.png')}
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
            source={require('./component/images/doa.png')}
          />
          </View>
        </TouchableOpacity>
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
    Detail: DetailDoa,
    About: About,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  headerButton: {
    padding: 13,
  },
  headerIcon: {
    color: '#ffffff',
    fontSize: 25,
  },
});