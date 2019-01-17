import React from 'react';
import {Icon,Content, Card, CardItem,Body,Text} from 'native-base';
import { View,TouchableHighlight,Image,StyleSheet } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import DzikirSoreSugro from '../../data/DzikirSoreSugro';


export default class SugroSoreScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Dzikir Sore Praktis',
    headerStyle: {
      backgroundColor: '#00dfbe'
    },
    headerTintColor: '#FFFFFF',
  };

  
    render() {
      const { navigation } = this.props;
  
      return (
        <View style={{flex:1, backgroundColor:'#ecf2f5'}}>
          <View style={{flex:2, margin:10}}>
            <Content>
            <Card style={styles.card}>
              <CardItem>
                <Text style={styles.judul}>Dzikir Sore Praktis</Text>
              </CardItem>
            </Card>
            {DzikirSoreSugro.map((sugro) => 
               <Card>
                <CardItem>
                  <Text style={styles.headerTitle}>
                    {sugro.headerTitle}
                  </Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={styles.arab}>
                      {sugro.arab}
                    </Text>
                    <Text style={styles.arablatin}>
                      {sugro.arablatin}
                    </Text>
                    <Text style={styles.terjemah}>
                      {sugro.terjemah}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            )}
            </Content>
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
    fontSize:30,
    fontFamily: 'lotus-linotype-light',
    color:'#333333',
  },
  arablatin: {
    lineHeight:20,
    marginTop: 10,
    fontStyle:'italic',
    color:'#666666',
    fontFamily: 'SourceSansPro',
    fontSize: 13,
  },
  terjemah: {
    lineHeight:20,
    fontFamily: 'SourceSans',
    marginTop:10,
    fontSize:13,
    color:'#333333',
  },
  card: {
    backgroundColor:'#f3f2f3',
  }
})