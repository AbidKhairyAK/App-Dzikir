import React from 'react';
import {Icon, Card, CardItem,Body,Text,Content, List, ListItem, Left, Right, Header, Button, Title} from 'native-base';
import { View,TouchableHighlight,Image, StyleSheet,ScrollView,TouchableOpacity,Clipboard} from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import DataDoa from '../../data/DataDoa';

export default class DetailDoa extends React.Component {
    static navigationOptions = {
      headerTitle: 'Detail Doa',
      headerStyle: {
        backgroundColor: '#00dfbe'
      },
      headerTintColor: '#FFFFFF',
    };
    
    id = this.props.navigation.getParam('itemId');
    index = parseInt(this.id) - 1;
    data = DataDoa[this.index];
    text = this.data.judul +'\n \n'+ this.data.arab +'\n \n'+ this.data.terjemah;

    copy() {
      Clipboard.setString(this.text);
    }
  
    render() {
      const index = parseInt(this.id) - 1;
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
                  <TouchableOpacity style={styles.copy} onPress={() => this.copy()} ><Text>Copy Do'a</Text></TouchableOpacity>
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
  header: {
    backgroundColor:'#00dfbe',
  },
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
    fontFamily: 'lotus-linotype-light',
    color:'#333333',
  },
  arablatin: {
    lineHeight:20,
    marginTop: 20,
    fontStyle:'italic',
    color:'#666666',
    fontFamily: 'SourceSansPro',
    fontSize: 15,
  },
  terjemah: {
    lineHeight:20,
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
  },
  copy: {
    fontFamily: 'SourceSansPro',
    fontSize: 17,
    textAlign:'center',
  }
})