import React from 'react';
import {Icon, Card, CardItem,Body,Text,Content, List, ListItem, Left, Right, Button} from 'native-base';
import { View,TouchableHighlight,Image,TouchableOpacity, StyleSheet } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import ListDoa from '../../data/ListDoa.json';

export default class DoaScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Daftar Doa',
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
                <ListItem thumbnail
                  onPress={() => this.props.navigation.navigate('Detail', {
                    itemId: data.id,
                   })}
                >
                  <Left>
                    <Text style={{fontSize:35}}>{data.id}</Text>
                  </Left>
                  <Body>
                    <Text style={styles.listjudul}>{data.judul}</Text>
                  </Body>
                  <Right>
                      <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              ))}
            </Content>
          </View>
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    listJudul: {
      fontFamily: 'SourceSansPro',
      fontSize: 17,
      fontWeight: 'bold',
      flex: 1,
      color: '#333333',
    }
  })