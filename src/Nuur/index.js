import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import salhiJson from '../data/salhi';
import galJson from '../data/gal';
import gazarJson from '../data/gazar';
import himiJson from '../data/himi';
import ovchinJson from '../data/ovchin';
import uyerJson from '../data/uyer';
import zudJson from '../data/zud';
import ayangaJson from '../data/ayanga';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
class Nuur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      data: [
        salhiJson,
        uyerJson,
        gazarJson,
        ayangaJson,
        zudJson,
        galJson,
        ovchinJson,
        himiJson,
      ],
      colors: [
        '#FFD08E',
        '#F2B45E',
        '#F5BB99',
        '#F6A06D',
        '#EC937A',
        '#F6663E',
        '#E87974',
        '#E3534C',
      ],
    };
  }

  renderItem = ({item}) => {
    const image = JSON.stringify(item.image);
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          this.props.navigation.navigate('Seemore', {
            data: item,
          })
        }>
        <LinearGradient
          style={styles.container}
          colors={['#F1CA2E', '#F6972A']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0, 1]}>
          <Image style={{width: 80, height: 80}} source={image} />
          <Text style={{color: 'white', fontSize: 16, fontFamily: 'bold'}}>
            {item.name}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <FlatList
        ListHeaderComponent={
          <View style={styles.MainContainer}>
            <Animatable.Text
              style={styles.title}
              animation="slideInDown"
              iterationCount={1}
              direction="alternate">
              ЗӨВЛӨГӨӨ
            </Animatable.Text>
          </View>
        }
        data={this.state.data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={this.renderItem}
      />
    );
  }
}
export default Nuur;
const styles = StyleSheet.create({
  container: {
    margin: SCREEN_WIDTH * 0.01,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH * 0.48,
    height: SCREEN_HEIGHT * 0.2,
    elevation: 3,
  },
  MainContainer: {
    width: wp('100%'),
    height: SCREEN_HEIGHT * 0.08,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    color: '#F6972A',
    textAlign: 'center',
    fontSize: 16,
  },
});
