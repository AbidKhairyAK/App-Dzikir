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
                    Taawudz
                  </Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={styles.arab}>
                    أَعُوْذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيْم 
                    </Text>
                    <Text style={styles.arablatin}>
                    A'udzubillaahis samii'il 'aliimi minassyaithoonirrojiim
                    </Text>
                    <Text style={styles.terjemah}>
                    Aku berlindung kepada Allah Yang Maha Mendengar lagi Maha
Mengetahui dari syaithan yang terkutuk
                    </Text>
                  </Body>
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
                    بِسْــــــــمِ اللَّــــــــهِ الرَّحْمَــــــــنِ الرَّحِيــــــــمِ * الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ * الرَّحْمَنِ الرَّحِيمِ * مَالِكِ يَوْمِ الدِّينِ * إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ * اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ * صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلاَالضَّآلِّينَ *
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
              <Card>
                <CardItem>
                  <Text style={styles.headerTitle}>
                    Surat Al Baqarah 1 - 5 Ayat Pertama
                  </Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={styles.arab}>
                       بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ * الم
* ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ
* الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ
* وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ
* أُولَٰئِكَ عَلَىٰ هُدًى مِنْ رَبِّهِمْ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ
                    </Text>
                    <Text style={styles.arablatin}>
                    Bismillaahirrohmaanirrohiim - Alif Laam Miim - Dza likal kitaabu laaroi bafiihi hudal lilmuttaqiin - Al ladziina yu'minuna bil ghoibi wa
yuqiimunassholaata wa mimma rozaqnaahum yum fiquun - Walladziina yu'
minuuna bimaa unzila ilaika wa maa unzila ming qoblika wa bil aakhiroti hum
yuu qinuun - Ulaa ika 'ala hudam mir robbihim wa ulaa ika humul muflihuun
                    </Text>
                    <Text style={styles.terjemah}>
                    Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang.
Alif Laam Miim. Kitab (Al Qur'an) ini tidak ada keraguan padanya;
petunjuk bagi mereka yang bertaqwa, (yaitu) mereka yang beriman
kepada yang gaib, yang mendirikan shalat dan menafkahkan sebahagian
rezki yang Kami anugerahkan kepada mereka, dan mereka yang beriman
kepada Kitab (Al Qur'an) yang telah diturunkan kepadamu dan Kitab-kitab
yang telah diturunkan sebelummu, serta mereka yakin akan adanya
(kehidupan) akhirat. Mereka itulah yang tetap mendapat petunjuk dari
Tuhan mereka, dan merekalah orang-orang yang beruntung
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
      fontSize:30,
      fontFamily: 'Scheherazade',
    },
    arablatin: {
      marginTop: 10,
      fontStyle:'italic',
      color:'green',
      fontFamily: 'SourceSansPro',
      fontSize: 13,
    },
    terjemah: {
      fontFamily: 'SourceSansPro',
      marginTop:10,
      fontSize:13,
    }
  })