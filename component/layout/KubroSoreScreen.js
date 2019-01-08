import React from 'react';
import {Icon,Content, Card, CardItem,Body} from 'native-base';
import { View,TouchableHighlight,Image, Text,StyleSheet } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import DzikirSoreKubro from '../../data/DzikirSoreKubro';

export default class KubroSoreScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Dzikir Petang Lengkap',
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
        <View style={{flex:1, backgroundColor:'#ecf2f5'}}>
          <View style={{flex:2, margin:10}}>
            <Content>
            <Card style={styles.card}>
              <CardItem>
                <Text style={styles.judul}>Dzikir Sore Lengkap</Text>
              </CardItem>
            </Card>
            {DzikirSoreKubro.map((kubro) => 
               <Card>
                <CardItem>
                  <Text style={styles.headerTitle}>
                    {kubro.headerTitle}
                  </Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={styles.arab}>
                      {kubro.arab}
                    </Text>
                    <Text style={styles.arablatin}>
                      {kubro.arablatin}
                    </Text>
                    <Text style={styles.terjemah}>
                      {kubro.terjemah}
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
    fontSize:25,
    fontFamily: 'JannaLT-Regular',
    color:'#333333',
  },
  arablatin: {
    marginTop: 10,
    fontStyle:'italic',
    color:'#666666',
    fontFamily: 'SourceSansPro',
    fontSize: 13,
  },
  terjemah: {
    fontFamily: 'SourceSans',
    marginTop:10,
    fontSize:13,
    color:'#333333',
  },
  card: {
    backgroundColor:'#f3f2f3',
  }
})