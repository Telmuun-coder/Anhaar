import React, {Component, useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-picker';
// import GetLocation from 'react-native-get-location';
import AppContext from '../AppContext.js';
import Button from '../Button';
import Text1 from './text';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const Home = (props) => {
  const [status, setStatus] = useState(false);
  const {signOut} = useContext(AppContext);
  const [fileUri, setFileUri] = useState();
  const [fileData, setFileData] = useState();
  const showImagePicker = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, (res) => {
      setFileData(res.data);
      setFileUri(res.uri);
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ImageContainer}>
        <TouchableOpacity onPress={() => signOut()}>
          <Text>Log out</Text>
        </TouchableOpacity>
        <Image
          style={styles.qrImage}
          source={require('../../images/qrcode.png')}></Image>
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text1 title="Нэр" text="Бүрэнбаяр" />
          <View style={styles.statusStyle}>
            {status ? (
              <Text
                style={{color: '#18DC73', marginHorizontal: 20, fontSize: 12}}>
                Хэвийн
              </Text>
            ) : (
              <Text
                style={{color: '#C12F2F', marginHorizontal: 20, fontSize: 12}}>
                Хяналтанд байна
              </Text>
            )}
          </View>
        </View>
        {status ? (
          <View style={{flexDirection: 'row', marginTop: 24}}>
            <Text1 title="Хүйс" text="Эрэгтэй" />
            <View style={{position: 'absolute', right: 0}}>
              <Text1 title="Огноо" text="2000.04.17" />
            </View>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              marginTop: 24,
              justifyContent: 'space-between',
            }}>
            <Text1 title="Хүйс" text="Эрэгтэй" />
            <Text1 title="Огноо" text="2000.04.17" />
            <Text1 title="Дуусах хугацаа" text="2020.06.30" />
          </View>
        )}
      </View>
      {status ? (
        <View style={styles.MainContainer}>
          <Text style={styles.mainText}>
            Таны ойролцоох 500м радиус доторх орчинд КОРОНА ВИРУСЫН аюултай хэн
            нэгэн байгаа эсэхийг шалгаж өгөх болно.
          </Text>
          <View style={styles.buttonStyle}>
            <Button name="Орчин шалгах" />
          </View>
        </View>
      ) : (
        <View style={styles.MainContainer}>
          <Text style={styles.mainText}>
            Та хяналтанд байгааа тул 30 минут тутамд өөрийн зургаа авч илгээнэ
            үү!
          </Text>
          <View style={styles.buttonStyle}>
            <Button method={showImagePicker} name="Зураг авах" />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageContainer: {
    height: SCREEN_HEIGHT * 0.45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainContainer: {
    // backgroundColor: 'red',
    paddingTop: 10,
    width: wp('100%'),
    height: SCREEN_HEIGHT * 0.23,
    alignItems: 'center',
  },
  qrImage: {width: 220, height: 220},
  infoContainer: {
    // backgroundColor: 'green',
    marginHorizontal: 15,
    justifyContent: 'center',
    width: wp('85%'),
    height: SCREEN_HEIGHT * 0.25,
  },
  statusStyle: {
    position: 'absolute',
    right: 0,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    position: 'absolute',
    bottom: 0,
  },
  mainText: {
    textAlign: 'center',
    color: 'grey',
    marginHorizontal: 50,
    fontSize: 11,
  },
});
