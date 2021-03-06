import React from 'react';
import { Tab, Tabs, TabHeading,Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { View,TouchableOpacity,Image, Text,StyleSheet } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import ActionSheet from 'react-native-zhb-actionsheet';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import Tab1 from './SugroSoreScreen';
import Tab2 from './KubroSoreScreen';


export default class SoreScreen extends React.Component {
  constructor(props) {
    super(props);
    this.customTitles = [{title: '27'}, {title: '28'}, {title: '29'}, {title: '30'}, {title: '31'}, {title: '32'}, {title: '33'}, {title: '34'}];
    this.state = {
      status:true,
      titles:this.customTitles,
    };
  }
 
  static navigationOptions = {
    header:null
  };

 _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  showMenu = () => {
    this._menu.show();
  };
  
  hideMenu = () => {
    this._menu.hide();
  };


  _hideText = () => {
     this.setState({
        status:!this.state.status,
      });

     this.hideMenu();
  }


  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1,backgroundColor:'#ecf2f5' }}>
      <ActionSheet
          ref="picker"
          titles={this.state.titles}
          separateHeight={3}
          separateColor="#dddddd"
          backgroundColor="rgba(0, 0, 0, 0.3)"
          containerStyle={{margin: 10, borderRadius: 5}}
          onClose={(obj) => {console.log('action sheet closed! clicked:' + JSON.stringify(obj));}}
      />
          <Header style={{backgroundColor:'#00dfbe'}}>
          <Left>
            <TouchableOpacity>
              <Icon onPress={() => navigation.goBack(null)} style={{color:'#fff'}} name='arrow-back'/>
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={styles.textHeader}>Dzikir Sore</Title>
          </Body>
          <Right>
            <Button transparent>
            <Menu
              style={styles.menuSetting}
              ref={this.setMenuRef}
              button=
              {
                <TouchableOpacity onPress={this.showMenu}>
                  <Icon style={{fontWeight:'bold', fontSize:30}} name='more' />
                </TouchableOpacity>
              }
            >
              <MenuItem
                onPress={() => this._hideText()}
              >Hidden Text</MenuItem>
              <MenuItem
                onPress={() => this._hideText()}
              >Show Text</MenuItem>
              <MenuItem 
                onPress={() => {this.setState({titles: this.customTitles}, () => {this.refs.picker.show();})
                this.hideMenu();}}
              >Font Size</MenuItem>
            </Menu>
            </Button>
          </Right>
        </Header>
         <Tabs>
          <Tab heading={ <TabHeading style={{backgroundColor:'#ecf2f5'}}><Text style={styles.textTab}>Praktis</Text></TabHeading>}>
            <Tab1 status={this.state.status} />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:'#ecf2f5'}}><Text style={styles.textTab}>Lengkap</Text></TabHeading>}>
            <Tab2 status={this.state.status}/>
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
  },
  textHeader:{
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 0,
    letterSpacing: 2,
    marginLeft:-20
  },
  menuSetting: {
    marginTop: 27,
    borderRadius:0
  },
});
