import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const itemScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <View>
          <Text style={styles.title}>{props.data.title}</Text>
        </View>
        <Image
          style={{width: props.wp, height: props.hp}}
          source={props.data.image}></Image>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.data.body}</Text>
        </View>
      </View>
    </View>
  );
};
export default itemScreen;
const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.92,
    backgroundColor: '#F28B16',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contain: {
    width: wp('100%'),
    height: hp('60%'),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginTop: 40,
  },
  textContainer: {
    width: wp('70%'),
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    marginBottom: 50,
  },
});
