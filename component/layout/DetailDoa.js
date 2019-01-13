import React from 'react';
import {Icon, Card, CardItem,Body,Text,Content, List, ListItem, Left, Right, Header, Button, Title} from 'native-base';
import { View,TouchableHighlight,Image, StyleSheet,ScrollView } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import DataDoa from '../../data/DataDoa';


export default class DoaScreen extends React.Component {
  static navigationOptions = {
    header:null,
  };

  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  
    render() {
      // const { navigation } = this.props;
      const id = this.props.navigation.getParam('itemId');
      const index = parseInt(id) - 1;
      return (
        <View style={{flex:1, backgroundColor:'#e5e5e7'}}>
          <Header style={styles.header}>
            <Left>
              <Button transparent>
                <Icon onPress={() => navigation.goBack(null)} name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Detail Doa</Title>
            </Body>
            <Right>
              <Button transparent>
              <Icon ref={this.setMenuRef}
                name='more'
                onPress={this.showMenu}
              />
              
              </Button>
            </Right>
          </Header>
          <Menu>
                <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
                <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
                <MenuItem onPress={this.hideMenu} disabled>
                  Menu item 3
                </MenuItem>
                <MenuDivider />
                <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
              </Menu>
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
  }
})