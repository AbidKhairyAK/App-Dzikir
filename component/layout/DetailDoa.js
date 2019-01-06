import React from 'react';
import {Icon, Card, CardItem,Body,Text,Content, List, ListItem, Left, Right} from 'native-base';
import { View,TouchableHighlight,Image, StyleSheet } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import DataDoa from '../../data/DataDoa';



export default class DoaScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Detail Doa',
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
      // const id = this.props.navigation.getParam("")  
      return (
        <View style={{flex:1, backgroundColor:'#e5e5e7'}}>
          <View style={{flex:2, margin:7}}>
            <Card style={styles.card}>
              <CardItem>
                <Text style={styles.judul}>Doa Sebelum Makan</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text style={styles.arab}>اَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ</Text>
                  <Text style={styles.arablatin}>Alloohumma barik lanaa fiimaa razatanaa waqinaa 'adzaa bannar </Text>
                  <Text style={styles.terjemah}>Ya Allah, berkahilah kami dalam rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa api neraka </Text>
                  <Text></Text>
                </Body>
              </CardItem>
            </Card>
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
  judul: {
    fontFamily: 'SourceSansPro',
    fontSize: 17,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    color: '#162e40',
  },
  headerTitle: {
    fontFamily: 'SourceSansPro',
    fontSize: 17,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    color: '#333333',
  },
  arab: {
    fontSize:35,
    fontFamily: 'JannaLT-Regular',
    color:'#333333',
  },
  arablatin: {
    marginTop: 20,
    fontStyle:'italic',
    color:'#666666',
    fontFamily: 'SourceSansPro',
    fontSize: 15,
  },
  terjemah: {
    fontFamily: 'SourceSans',
    marginTop:10,
    fontSize:15,
    color:'#333333',
  },
  card: {
    backgroundColor:'#f3f2f3',
  }
})