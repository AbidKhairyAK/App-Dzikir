import React from 'react';
import { Button, View,StyleSheet, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Accordion, Card, CardItem, Body, Text } from 'native-base';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Dzikir Pagi & Petang',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', backgroundColor:'#162e40' }}>
        <Button
          title="Pagi"
          onPress={() => {
            this.props.navigation.navigate('Sore', {
              itemId: 86,
            });
          color='black'
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
      <View style={{ flex: 1, alignItems: 'center',flexDirection: 'row', justifyContent: 'space-around', backgroundColor:'#e5e4e5' }}>
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

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

class DoaScreen extends React.Component {
  static navigationOptions = {
    title: 'Doa Harian',
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');

    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor:'#e5e4e5' }}>
          <Accordion 
            style={{margin:10, backgroundColor:'#fff'}}
            dataArray={dataArray} expanded={0} 
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
      <View style={{ flex:1, backgroundColor:'#e5e4e5' }}>
        <Card>
          <CardItem>
            <Body>
              <Text>Surat Al Fatihah</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Text>بِسْــــــــمِ اللَّــــــــهِ الرَّحْمَــــــــنِ الرَّحِيــــــــمِ {1} الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ {2} الرَّحْمَنِ الرَّحِيمِ {3} مَالِكِ يَوْمِ الدِّينِ {4} إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ {5} اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ {6} صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلاَالضَّآلِّينَ {7}
</Text>
            </Body>
          </CardItem>
        </Card>
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
