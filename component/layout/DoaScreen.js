import React from 'react';
import {Icon, Card, CardItem,Body,Text,Content, List, ListItem, Left, Right} from 'native-base';
import { View,TouchableHighlight,Image,TouchableOpacity, StyleSheet } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import ListDoa from '../../data/ListDoa.json';

export default class DoaScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Doa Harian',
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
  
      return (
        <View style={{flex:1, backgroundColor:'#ffffff'}}>
          <View style={{flex:2, margin:7}}>
            <Content>
              {ListDoa.map((data) => (
                <TouchableOpacity
                   style={styles.button}
                   onPress={() => this.props.navigation.navigate('Detail', {
                    itemId: data.id,
                   })}
                 >
                   <Text style={styles.listJudul}>{data.judul}</Text>
                </TouchableOpacity>
              ))}
            </Content>
          </View>
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    button: {
      marginTop:10,
      marginLeft:10,
      marginRight:10,
      backgroundColor: '#e5e5e7',
      padding:15
    },
    listJudul: {
      fontFamily: 'SourceSansPro',
      fontSize: 17,
      fontWeight: 'bold',
      flex: 1,
      color: '#333333',
    }
  })