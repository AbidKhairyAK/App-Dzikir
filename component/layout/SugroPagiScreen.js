import React from 'react';
import {Icon,Content, Card, CardItem,Body,Text} from 'native-base';
import { View,TouchableHighlight,Image,StyleSheet } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class SugroPagiScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Dzikir Pagi Praktis',
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
                <Text style={styles.judul}>Dzikir Pagi Praktis</Text>
              </CardItem>
            </Card>
              <Card>
                <CardItem>
                  <Text style={styles.headerTitle}>
                    Al Fatihah
                  </Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={styles.arab}>
                    بِسْــــــــمِ اللَّــــــــهِ الرَّحْمَــــــــنِ الرَّحِيــــــــمِ {0} الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ {0} الرَّحْمَنِ الرَّحِيمِ {0} مَالِكِ يَوْمِ الدِّينِ {0} إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ {0} اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ {0} صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلاَالضَّآلِّينَ {0}
                    </Text>
                    <Text style={styles.arablatin}>
                      Bismillahirrohmaanirrohiim - Al hamdulillaahirobbil 'aalamiin - Ar rohmaanir
rohiim - Maaliki yaumid diin - Iyya ka na'budu wa iyya ka nasta 'iin -Iihdinash
shiroothol mustaqiim - Shirootol ladzina an'amta 'alaihim ghoiril magh dhuu
bi 'alaihim wa ladh dhool liin
                    </Text>
                    <Text style={styles.terjemah}>
                      Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha
Penyayang. Segala puji bagi Allah, Tuhan semesta alam, Maha
Pemurah lagi Maha Penyayang, Yang menguasai hari pembalasan.
Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah
kami mohon pertolongan, Tunjukilah kami jalan yang lurus, (yaitu)
jalan orang-orang yang telah Engkau anugerahkan nikmat kepada mereka,
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


  const styles = StyleSheet.create({
    judul: {
      fontFamily: 'SourceSansPro',
      fontSize: 17,
      fontWeight: 'bold',
      flex: 1,
      textAlign: 'center',
      color: 'green',
    },
    headerTitle: {
      fontFamily: 'SourceSansPro',
      fontSize: 17,
      fontWeight: 'bold',
      flex: 1,
      textAlign: 'center',
      color: 'green',
    },
    arab: {
      fontSize:25,
      fontFamily: 'Scheherazade',
    },
    arablatin: {
      marginTop: 10,
      fontStyle:'italic',
      color:'green',
      fontSize: 15,
    },
    terjemah: {
      marginTop:10,
      fontSize:15,
    }
  })