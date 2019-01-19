import React from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon } from 'native-base';
import { View,TouchableOpacity,Image, Text,StyleSheet } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import Tab1 from './SugroSoreScreen';
import Tab2 from './KubroSoreScreen';


export default class SoreScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Dzikir Sore',
    headerStyle: {
      backgroundColor: '#00dfbe'
    },
    headerTitleStyle: {
        fontFamily: 'SourceSansPro',
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 0,
        flex: 1,
        letterSpacing: 2,
      },
    headerTintColor: '#FFFFFF',
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#ecf2f5' }}>
         <Tabs>
          <Tab heading={ <TabHeading style={{backgroundColor:'#ecf2f5'}}><Text style={styles.textTab}>Peraktis</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:'#ecf2f5'}}><Text style={styles.textTab}>Lengkap</Text></TabHeading>}>
            <Tab2 />
          </Tab>
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textTab:{
    fontSize:20,
    color:'#666',
    fontWeight:'bold',
    fontFamily: 'SourceSansPro',
  }
});