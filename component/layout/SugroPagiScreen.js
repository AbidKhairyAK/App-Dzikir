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
        <View style={{flex:1, backgroundColor:'#ecf2f5'}}>
          <View style={{flex:2, margin:7}}>
            <Content>
            <Card style={styles.card}>
              <CardItem>
                <Text style={styles.judul}>Dzikir Pagi Praktis</Text>
              </CardItem>
            </Card>
             <Card>
                <CardItem>
                  <Text style={styles.headerTitle}>
                    Ta'awudz
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
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ  * الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ * الرَّحْمَنِ الرَّحِيمِ * مَالِكِ يَوْمِ الدِّينِ * إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ * اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ * صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلاَالضَّآلِّينَ *
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
              <Card>
                <CardItem>
                  <Text style={styles.headerTitle}>
                    Ayat Kursi dan 2 Ayat setelahnya
                  </Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={styles.arab}>
                      اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ  *لَا إِكْرَاهَ فِي الدِّينِ ۖ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ ۚ فَمَن يَكْفُرْ بِالطَّاغُوتِ وَيُؤْمِن بِاللَّهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَىٰ لَا انفِصَامَ لَهَا ۗ وَاللَّهُ سَمِيعٌ عَلِيمٌ  *اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا يُخْرِجُهُم مِّنَ الظُّلُمَاتِ إِلَى النُّورِ ۖ وَالَّذِينَ كَفَرُوا أَوْلِيَاؤُهُمُ الطَّاغُوتُ يُخْرِجُونَهُم مِّنَ النُّورِ إِلَى الظُّلُمَاتِ ۗ أُولَٰئِكَ أَصْحَابُ النَّارِ ۖ هُمْ فِيهَا خَالِدُونَ 
                    </Text>
                    <Text style={styles.arablatin}>
                      Alloohu laa ilaaha illa huwal hayyul qoyyuumu laa ta'khuzuhuu sinatuw walaa
naumun lahuu maa fissamaawaati wa maa fil ardhi man dzalladzii yasyfa'u
'indahu illa bi idznihi ya'lamu maa baina aidiihim wa maa kholfahum wa laa
yuhiithuuna bisyai-in min 'ilmihi illaa bi maa syaa-a wasi'a kursiyyuhus-
samawaati wal ardhi wa laa yauuduhu hifzuhuma wahuwal 'aliyyul 'azhiim. La
ikroha fid-diini qot tabayyanar-rusydu minal ghoyyi famay yakfur bith-
thooghuuti wa yu' minu billahi faqodis tamsaka bil 'urwatil wutsqoo lan
fishooma laha wallohu samii'un aliim. Allohu waliyyul ladziina aamanuu
yukhrijuhum minazh-zhulumaati ilan-nuuri walladziina kafaruu awliyaa-u
humuth-thooghutu yukhri-juunahum minan-nuuri ilazh-zhulumaati ulaa-ika
ash-haabun-naarihum fiihaa khooliduun
                    </Text>
                    <Text style={styles.terjemah}>
                      Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang
Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk
dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang
dapat memberi syafaat di sisi Allah tanpa izin-Nya. Allah mengetahui apa-
apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak
mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya.
Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat
memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar. Tidak
ada paksaan untuk (memasuki) agama (Islam); sesungguhnya telah jelas
jalan yang benar daripada jalan yang sesat. Karena itu barang siapa yang
ingkar kepada Thaghut dan beriman kepada Allah, maka sesungguhnya ia
telah berpegang kepada buhul tali yang amat kuat yang tidak akan putus.
Dan Allah Maha Mendengar lagi Maha Mengetahui. Allah Pelindung
orang-orang yang beriman; Dia mengeluarkan mereka dari kegelapan
(kekafiran) kepada cahaya (iman). Dan orang-orang yang kafir, pelindung-
pelindungnya ialah syaithan, yang mengeluarkan mereka dari cahaya
kepada kegelapan (kekafiran). Mereka itu adalah penghuni neraka; mereka
kekal di dalamnya.
                    </Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Text style={styles.headerTitle}>
                    3 Ayat terakhir Surat Al Baqarah
                  </Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={styles.arab}>
                      لِّلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ وَإِن تُبْدُوا مَا فِي أَنفُسِكُمْ أَوْ تُخْفُوهُ يُحَاسِبْكُم بِهِ اللَّهُ ۖ فَيَغْفِرُ لِمَن يَشَاءُ وَيُعَذِّبُ مَن يَشَاءُ ۗ وَاللَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ  *آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ  *لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ 
                    </Text>
                    <Text style={styles.arablatin}>
                      Lillahi maa fis-samawaati wa maa fil ardhi wa in tubduu ma fii anfusikum aw
tukhfuuhu yuhaasibkum bihillaahu fayaghfiru limay-yasyaa-u wa yu'adzibu
may-yasyaa-u wallohu 'alaa kulli syai-in qodiir. Aamanar rosuulu bima unzila
ilaihi mir-robbihi wal mu'minuuna kullun aamana billahi wa malaaikatihi wa
kutubihi wa rusulihi laa nufarriqu baina ahadim-mir-rusulihi waqoluu sami'na
wa atho'naa ghufronaka robbana wa ilaikal-mashiiru. Laa yukallifullohu
nafsan illa wus'ahaa lahaa maa kasabat wa 'alaiha maktasabat, robbana laa
tuaakhidznaa in nasiina aw akhtho'naa, robbana walaa tahmil 'alainaa ishron
kama hamaltahu 'alal-ladziina min qoblinaa, robbana wa laa tuhammilnaa maa
laa thooqotalanaa bihi wa'fu 'annaa waghfirlanaa warhamnaa anta maulaanaa
fanshurnaa 'alal-qoumil-kaafiriin
                    </Text>
                    <Text style={styles.terjemah}>
                      Kepunyaan Allah-lah segala apa yang ada di langit dan apa yang ada
di bumi. Dan jika kamu melahirkan apa yang ada di dalam hatimu atau
kamu menyembunyikannya, niscaya Allah akan membuat perhitungan
dengan kamu tentang perbuatanmu itu. Maka Allah mengampuni siapa
yang dikehendaki-Nya dan menyiksa siapa yang dikehendaki-Nya; dan
Allah Maha Kuasa atas segala sesuatu. Rasul telah beriman kepada Al
Qur'an yang diturunkan kepadanya dari Tuhannya, demikian pula orang-
orang yang beriman. Semuanya beriman kepada Allah, malaikat-malaikat-
Nya, kitab-kitab-Nya dan rasul-rasul-Nya. (Mereka mengatakan): "Kami
tidak membeda-bedakan antara seseorang pun (dengan yang lain) dari rasul
rasul-Nya", dan mereka mengatakan: "Kami dengar dan kami taat".
(Mereka berdoa):"Ampunilah kami ya Tuhan kami dan kepada Engkaulah
tempat kembali". Allah tidak membebani seseorang melainkan sesuai
dengan kesanggupannya. Ia mendapat pahala (dari kebajikan) yang
diusahakannya dan ia mendapat siksa (dari kejahatan) yang dikerjakannya.
(Mereka berdo`a): "Ya Tuhan kami, janganlah Engkau hukum kami jika
kami lupa atau kami tersalah. Ya Tuhan kami, janganlah Engkau bebankan
kepada kami beban yang berat sebagaimana Engkau bebankan kepada
orang-orang yang sebelum kami. Ya Tuhan kami, janganlah Engkau
pikulkan kepada kami apa yang tak sanggup kami memikulnya. Berimaaflah kami; ampunilah kami; dan rahmatilah kami. Engkaulah Penolong
kami, maka tolonglah kami terhadap kaum yang kafir
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
    color: '#333333',
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