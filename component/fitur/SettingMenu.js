import React, { Component } from 'react';

import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { View, Text, List, ListItem } from 'native-base';

const SettingMenu = (props) => {
  const { hide, navigation } = props;
  
  if (hide) {
    return null;
  }

  return (
    <View style={styles.float}>
      <List>
        <ListItem style={styles.textFloat}>
          <TouchableOpacity style={styles.button} onPress={() => 
            {
              navigation.setParams({
                hideSetting: true,
              });
              navigation.navigate('About');
            }
          }>
            <Text style={styles.text}>About</Text>
          </TouchableOpacity>
        </ListItem>
      </List>
    </View>
  );
}

const styles = StyleSheet.create({
  float: {
    position: 'absolute',
    backgroundColor: '#fff',
    elevation: 2,
    top: -25,
    left: 15,
    width: 100,
  },
  textFloat: {
    marginLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
  },
  button: {
    paddingVertical: 15,
    flex: 1,
  },
  text: {
    fontFamily: 'SourceSansPro',
    fontStyle: 'italic',
    fontSize: 14,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
  }
});

export default SettingMenu;
