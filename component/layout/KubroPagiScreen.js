import React from 'react';
import {Icon,Content, Card, CardItem,Body} from 'native-base';
import { View,TouchableHighlight,Image, Text,StyleSheet,ScrollView } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import DzikirPagiKubro from '../../data/DzikirPagiKubro';

export default class KubroSoreScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Dzikir Pagi Lengkap',
      headerTitleStyle: {
        fontFamily: 'SourceSansPro',
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 0,
        flex: 1,
        letterSpacing: 2,
      },
      headerStyle: {
        backgroundColor: '#00dfbe'
      },
      headerTintColor: '#FFFFFF',
  };
  
    render() {
      const { navigation } = this.props;
  
      return (
        <View style={{flex:1, backgroundColor:'#ecf2f5'}}>
          <ScrollView style={{flex:2, margin:15}}>
            <View style={{backgroundColor:'#ffffff'}}>
              <Text style={styles.textJudul}>Dzikir Pagi Lengkap</Text>
            </View>
            {DzikirPagiKubro.map((kubro) =>
              <View style={{backgroundColor:'#ffffff', marginTop:10, padding:12}}>
                <Text style={styles.textJudul}>{kubro.headerTitle}</Text>
                <Text style={styles.textArab}>{kubro.arab}</Text>
                <Text style={styles.textArabLatin}>{kubro.arablatin}</Text>
                <Text style={styles.textTerjemah}>{kubro.terjemah}k</Text>
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