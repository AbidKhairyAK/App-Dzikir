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