import React, { Component } from 'react';

import { StyleSheet, TouchableOpacity, Dimensions, Clipboard } from 'react-native';
import { View, Text, List, ListItem } from 'native-base';

const OptionMenu = (props) => {
  const { hide, navigation } = props;
  
  if (hide) {
    return null;
  }

  const salinAll = async () => {
    await Clipboard.setString(navigation.getParam('doaAll'));
    navigation.setParams({ hideOption: true });
    alert('Tersalin Ke Clipboard!');
  };

  return (
    <View style={styles.float}>
      <List>
        <ListItem style={styles.textFloat}>
          <TouchableOpacity style={styles.button} onPress={salin}>
            <Text style={styles.text}>Salin Doa</Text>
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
    right: 15,
    width: 150,
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

export default OptionMenu;