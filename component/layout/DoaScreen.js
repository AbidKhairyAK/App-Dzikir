import React from 'react';
import {Icon,Content, Card, CardItem,Body,Text} from 'native-base';
import { View,TouchableHighlight,Image } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';


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
        <View style={{flex:1, backgroundColor:'#e5e5e7'}}>
          <View style={{flex:2, margin:7}}>
            <Content>
              <Card>
                <CardItem>
                  <Body>
                    <Text>
                      Cek Halaman Doa Harian
                    </Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <Text>
                      Cek Halaman Doa Harianaksdlandjasnjasdasdasndkasndkajsndkajnds
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </View>
        </View>
      );
    }
  }