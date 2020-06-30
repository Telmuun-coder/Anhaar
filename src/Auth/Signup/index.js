import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  ScrollView,
  SafeAreaView,
  Dimensions,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import QRCodeScanner from 'react-native-qrcode-scanner';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../Button';
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      camera: true,
    };
  }
  onSuccess = (e) => {
    console.log(e);
    alert(e.data);
    this.handleCamera();
  };
  handleCamera = () => {
    this.setState({camera: !this.state.camera});
  };
  makeSlideOutTranslation(translationType, fromValue) {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * -0.18,
      },
      to: {
        [translationType]: fromValue,
      },
    };
  }
  signUp = () => {
    alert('Amjilttai burtguullee');
  };
  render() {
    return (
      <ScrollView>
        {this.state.camera ? (
          <View style={styles.topContainer}>
            <TouchableOpacity
              style={styles.cameraStyle}
              onPress={() => this.handleCamera()}>
              <Icon name="camera" size={25} color="black" />
            </TouchableOpacity>
            <View style={{width: wp('70%')}}>
              <Text style={{textAlign: 'center', color: 'grey'}}>
                Та иргэний үнэмлэхний ард байрлах QR code-ний зургыг авна уу!
              </Text>
            </View>
          </View>
        ) : (
          <QRCodeScanner
            showMarker
            onRead={this.onSuccess.bind(this)}
            cameraStyle={{height: SCREEN_HEIGHT}}
            customMarker={
              <View style={styles.rectangleContainer}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.leftAndRightOverlay} />

                  <View style={styles.rectangle}>
                    <Image
                      style={{height: 220, width: 220}}
                      source={require('../../../images/qrScanner.png')}></Image>
                  </View>

                  <View style={styles.leftAndRightOverlay} />
                </View>

                <View style={styles.bottomOverlay} />
              </View>
            }
          />
        )}

        <View
          style={{
            width: wp('100%'),
            height: hp('45%'),
            backgroundColor: 'white',
            borderTopStartRadius: 10,
            borderTopRightRadius: 10,
            justifyContent: 'center',
            marginTop: this.state.camera ? 0 : -SCREEN_WIDTH * 0.3,
          }}>
          <View style={styles.item}>
            <Text style={styles.itemText}>УРГЫН ОВОГ</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>НЭР</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>ХҮЙС</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>РЕГИСТРИЙН ДУГААР</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.lastItem}>
            <Text style={styles.itemText}>НУУЦ ҮГ</Text>
            <TextInput style={styles.input} />
          </View>
        </View>
        <Button method={this.signUp} name="Бүртгүүлэх" />
      </ScrollView>
    );
  }
}
export default Signup;

const overlayColor = 'rgba(0,0,0,0.5)'; // this gives us a black color with a 50% transparency

const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width

const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const styles = StyleSheet.create({
  item: {
    borderBottomColor: '#DBD0D0',
    borderBottomWidth: 1,
    marginHorizontal: 15,
    marginVertical: 1,
  },
  lastItem: {
    marginHorizontal: 15,
  },
  itemText: {
    marginTop: 5,
    color: 'grey',
    fontSize: 12,
  },
  input: {
    padding: 0,
  },
  cameraStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    width: wp('100%'),
    height: rectDimensions,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: wp('100%'),
    height: hp('45%'),
    backgroundColor: 'blue',
    borderTopStartRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
  },

  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  bottomOverlay: {
    flex: 1,
    width: SCREEN_WIDTH,
    backgroundColor: 'white',
  },

  leftAndRightOverlay: {
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
  },
});
