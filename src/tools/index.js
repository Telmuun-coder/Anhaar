import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
class tools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        'Гар чийдэн',
        'Гар чийдэн анивчуулах',
        'Дуут дохио',
        'Түгшүүрийн дохио',
        'Байршил мэдээлэх',
      ],
    };
  }
  renderItem = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <LinearGradient
          style={styles.container}
          colors={['#42f5b6', '#58bf9b']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0, 1]}>
          <Image
            style={{width: 35, height: 35}}
            source={require('../../images/location.png')}
          />
          <Text style={{color: 'white', fontSize: 21, fontFamily: 'bold'}}>
            {item}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View>
        <View style={styles.MainContainer}>
          <Text style={styles.title}>Хэрэгслүүд</Text>
        </View>
        <FlatList data={this.state.data} renderItem={this.renderItem} />
      </View>
    );
  }
}
export default tools;
const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('100%'),
    height: hp('15%'),
    elevation: 3,
  },
  MainContainer: {
    width: wp('100%'),
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    color: '#F6972A',
    textAlign: 'center',
    fontSize: 16,
  },
});
