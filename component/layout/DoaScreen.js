import React from 'react';
import {Icon, Card, CardItem,Body,Text,Content, List, ListItem, Left, Right} from 'native-base';
import { View,TouchableHighlight,Image } from 'react-native';
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
                <List>
                  <ListItem style={{ backgroundColor: "#e5e5e7" }}
                  >
                    <Left>
                      <Text style={{marginLeft:7}}>{data.judul}</Text>
                    </Left>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                  </ListItem>
                </List>
              ))}
            </Content>
          </View>
        </View>
      );
    }
  }