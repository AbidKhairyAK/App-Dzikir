import React from 'react';
import { Button, View, Text,FlatList,StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Dzikir Pagi & Petang',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#162e40' }}>
        <Button
          title="Pagi"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
            });
          }}
        />
        <Button
          title="Petang"
          onPress={() => {
            this.props.navigation.navigate('Sore', {
              itemId: 86,
            });
          color='black'
          }}
        />
        <Button
          title="Doa Harian"
          onPress={() => {
            this.props.navigation.navigate('Doa', {
              itemId: 86,
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Dzikir Pagi',
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');

    return (
      <View style={{ flex: 1, alignItems: 'center',flexDirection: 'row', justifyContent: 'center', backgroundColor:'#e5e4e5' }}>
        <Button
          title="Sugro"
          onPress={() => {
            this.props.navigation.navigate('Sugro', {
              itemId: 86,
            });
          }}
        />
        <Button
          title="Kubro"
          onPress={() => {
            this.props.navigation.navigate('Kubro', {
              itemId: 86,
            });
          }}
        />
      </View>
    );
  }
}

class SoreScreen extends React.Component {
  static navigationOptions = {
    title: 'Dzikir Sore',
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');

    return (
      <View style={{ flex: 1, alignItems: 'center',flexDirection: 'row', justifyContent: 'center', backgroundColor:'#e5e4e5' }}>
        <Button
          title="Sugro"
          onPress={() => {
            this.props.navigation.navigate('Sugro', {
              itemId: 86,
            });
          }}
        />
        <Button
          title="Kubro"
          onPress={() => {
            this.props.navigation.navigate('Kubro', {
              itemId: 86,
            });
          }}
        />
      </View>
    );
  }
}

class DoaScreen extends React.Component {
  static navigationOptions = {
    title: 'Doa Harian',
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');

    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor:'#e5e4e5' }}>
        <FlatList
          data={[
            {key: 'Doa Mau Makan'},
            {key: 'Doa Mau Tidur'},
            {key: 'Doa Masuk Rumah'},
            {key: 'Doa Ketika Turun Hujan'},
            {key: 'Doa Buat Orang Tua'},
            {key: 'Doa Masuk Masjid'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

class SugroScreen extends React.Component {
  static navigationOptions = {
    title: 'Sugro',
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#e5e4e5' }}>
        <Text>Sugro</Text>
      </View>
    );
  }
}

class KubroScreen extends React.Component {
  static navigationOptions = {
    title: 'Kubro',
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#e5e4e5' }}>
        <Text>Kubro</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Sore: SoreScreen,
    Doa: DoaScreen,
    Sugro: SugroScreen,
    Kubro: KubroScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
