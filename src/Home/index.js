import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Dimensions,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-picker';
import AppContext from '../AppContext.js';
import Button from '../Button';
import Text1 from './text';
import Icon from 'react-native-vector-icons/Entypo';
import AntiIcon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../Loader/Loader';
import axios from '../../axios';
import Geolocation from 'react-native-geolocation-service';
import Mood from '../Modal/index.js';
import {CachedImage} from 'react-native-img-cache';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const Home = () => {
  const {signOut} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalLoading, setModalLoading] = useState(true);
  const [area, setArea] = useState(null);

  let bairlal = {
    latitude: 247,
    longitude: 247,
  };

  const upload = async (image_uri) => {
    setLoading(true);
    try {
      let uploadImage = new FormData();
      uploadImage.append('file', {
        type: image_uri.type,
        uri: image_uri.uri,
        name: image_uri.fileName,
      });
      await axios({
        headers: {
          'content-type': 'multipart/form-data',
        },
        method: 'post',
        url: '/anhaar/uploadFile',
        data: uploadImage,
      }).then((response) => {
        if (response.data.message === 'Success') {
          checkPlace('dont', response.data.entity);
        } else alert('Зураг оруулж чадсангүй. Та дахин оролдоно уу.'); //ene alertiig oorchlood retry hiideg bolgoh
      });
    } catch (e) {
      console.log('Зураг upload хийх үед алдаа гарав ' + e);
    } finally {
      setLoading(false);
    }
  };

  const getDataFromLocal = async () => {
    //Asyncasa buh dataga unshij haruulna.
    setLoading(true);
    const values = await AsyncStorage.multiGet([
      'firstName',
      'status',
      'endDate',
      'qrCode',
      'sex',
      'dateOfBirth',
    ]);
    let u = {};
    //---------Normal---------------------------
    values.forEach((e) => (u[e[0]] = e[1]));
    //---------Not Normal---------------------------
    // values.forEach((e) => {
    //   if (e[0] === 'status') u[e[0]] = 'notNormal';
    //   else u[e[0]] = e[1];
    // });
    setUserInfo(u);
    setLoading(false);
  };

  useEffect(() => {
    if (!userInfo) getDataFromLocal();
  }, []);

  const send = async (link) => {
    try {
      const token = await AsyncStorage.getItem('token');
      axios.defaults.headers.common = {
        Authorization: `Bearer ${token}`,
        // 'Content-Type': 'application/json',
      };
      console.log(
        'lat: ' + bairlal.latitude + '\n' + 'long: ' + bairlal.longitude,
      );
      const res = await axios.post(link, bairlal);
      userInfo.status !== 'normal' && alert(res.data.entity.message);
      userInfo.status === 'normal' && setArea(res.data.entity.area);
    } catch (e) {
      console.log('Орчин шалгах үед алдаа гарлаа: ' + e.message);
    } finally {
      setModalLoading(false);
    }
  };

  const checkPlace = async (dont = 'do', imUrl) => {
    Geolocation.getCurrentPosition(
      async (data) => {
        if (dont === 'do') {
          setModal(true);
          setModalLoading(true);
          bairlal = {
            latitude: data.coords.latitude,
            longitude: data.coords.longitude,
          };
          send('/anhaar/user/checkUserArea');
        } else {
          bairlal = {
            latitude: data.coords.latitude,
            longitude: data.coords.longitude,
            imageUrl: imUrl,
          };
          send('/anhaar/user/setLocation');
        }
      },
      (error) => {
        alert(
          'Алдаа гарлаа. Та гар утасныхаа Location буюу GPS-г асаан эсэхээ шалгаад дахин оролдоно уу.',
        );
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 2000, maximumAge: 3600000},
    );
  };
  const showImagePicker = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (res) => {
      upload(res);
    });
  };

  if (!userInfo) {
    return <View />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Loader visible={loading} />
      <Mood
        loading={modalLoading}
        show={modal}
        closeModal={() => setModal(!modal)}>
        {area === 'clear' ? (
          <>
            <Text style={styles.ModalTitle}>Хэвийн</Text>
            <AntiIcon name="checkcircleo" color="#40C528" size={70} />
          </>
        ) : (
          <>
            <Text style={[styles.ModalTitle, {color: '#E64B34'}]}>
              Хэвийн бус
            </Text>
            <AntiIcon name="exclamationcircleo" color="#E64B34" size={70} />
          </>
        )}

        <Button method={() => setModal(!modal)} name="OK" />
      </Mood>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => signOut()}>
        <Icon color="orange" size={20} name="log-out" />
        <Text>Log out</Text>
      </TouchableOpacity>
      <View style={styles.ImageContainer}>
        {/* <Image
          style={styles.qrImage}
          //source={require('../../images/qrcode.png')}
          source={{
            uri: userInfo.qrCode,
          }}
        /> */}
        <CachedImage style={styles.qrImage} source={{uri: userInfo.qrCode}} />
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text1 title="Нэр" text={userInfo.firstName} />
          <View style={styles.statusStyle}>
            {userInfo.status === 'normal' ? (
              <Text
                style={{
                  color: '#18DC73',
                  marginHorizontal: 20,
                  fontSize: 12,
                }}>
                Хэвийн
              </Text>
            ) : (
              <Text
                style={{
                  color: '#C12F2F',
                  marginHorizontal: 20,
                  fontSize: 12,
                }}>
                Хяналтанд байна
              </Text>
            )}
          </View>
        </View>
        {userInfo.status === 'normal' ? (
          <View style={{flexDirection: 'row', marginTop: 24}}>
            <Text1
              title="Хүйс"
              text={userInfo.sex === 'Male' ? 'Эрэгтэй' : 'Эмэгтэй'}
            />
            <View style={{position: 'absolute', right: 0}}>
              <Text1 title="Огноо" text={userInfo.dateOfBirth} />
            </View>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              marginTop: 24,
              justifyContent: 'space-between',
            }}>
            <Text1
              title="Хүйс"
              text={userInfo.sex === 'Male' ? 'Эрэгтэй' : 'Эмэгтэй'}
            />
            <Text1 title="Огноо" text={userInfo.dateOfBirth} />
            <Text1 title="Дуусах хугацаа" text={userInfo.endDate} />
          </View>
        )}
      </View>
      {/* {'sda' === 'normal' ? ( */}
      {userInfo.status === 'normal' ? (
        <View style={styles.MainContainer}>
          <Text style={styles.mainText}>
            Таны ойролцоох 500м радиус доторх орчинд КОРОНА ВИРУСЫН аюултай хэн
            нэгэн байгаа эсэхийг шалгаж өгөх болно.
          </Text>
          <View style={styles.buttonStyle}>
            <Button method={() => checkPlace()} name="Орчин шалгах" />
          </View>
        </View>
      ) : (
        <View style={styles.MainContainer}>
          <Text style={styles.mainText}>
            Та хяналтанд байгаа тул 30 минут тутамд өөрийн зургаа авч,
            байршилтай илгээнэ үү!
          </Text>
          <View style={styles.buttonStyle}>
            <Button method={() => showImagePicker()} name="Зураг авах" />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  ModalTitle: {
    marginTop: 30,
    fontSize: 20,
    color: '#40C528',
  },
  ModalTailbar: {
    color: '#BFBFBF',
    fontSize: 12,
  },
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
    //backgroundColor: 'red',
    paddingTop: 10,
    width: wp('100%'),
    height: SCREEN_HEIGHT * 0.23,
    alignItems: 'center',
  },
  qrImage: {marginTop: 50, width: 220, height: 220},
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
    bottom: 30,
    marginVertical: 15,
  },
  mainText: {
    textAlign: 'center',
    color: 'grey',
    marginHorizontal: 50,
    fontSize: 11,
  },
});
