import React from 'react';
import {Icon, Card, CardItem,Body,Text,Content, List, ListItem, Left, Right} from 'native-base';
import { View,TouchableHighlight,Image, StyleSheet,ScrollView } from 'react-native';
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
      // const { navigation } = this.props;
      const id = this.props.navigation.getParam('itemId');
      const index = parseInt(id) - 1;
      return (
        <View style={{flex:1, backgroundColor:'#e5e5e7'}}>
          <ScrollView style={{flex:2, margin:7}}>
            <Card style={styles.card}>
              <CardItem header>
                <Text style={styles.judul}>{DataDoa[index].judul}</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text style={styles.arab}>{DataDoa[index].arab}</Text>
                  <Text style={styles.arablatin}>{DataDoa[index].arablatin}</Text>
                  <Text style={styles.terjemah}>{DataDoa[index].terjemah}</Text>
                  <Text></Text>
                </Body>
              </CardItem>
              <CardItem footer>
                <Text style={styles.sumber}>{DataDoa[index].sumber}</Text>
              </CardItem>
            </Card>
          </ScrollView>
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
  }, 
  sumber: {
    fontSize:10,
    fontFamily: 'SourceSans',
    fontStyle:'italic',
    textAlign: 'center',
  }
})