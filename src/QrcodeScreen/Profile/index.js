import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  SafeAreaView,
  Modal,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Iconn from 'react-native-vector-icons/Ionicons';
import Form from '../../Auth/Form';
const Profile = (props) => {
  return (
    <Modal animationType={'fade'} visible={props.isModalVisible}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ХУВИЙН МЭДЭЭЛЭЛ</Text>
        <TouchableOpacity
          onPress={() => props.closeModal()}
          style={styles.closeIcon}>
          <Iconn name="ios-close" size={32} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: 'whitesmoke',
            width: wp('100%'),
            height: 60,
          }}></View>
        <Image
          source={require('../../../images/profile.jpg')}
          style={styles.cameraStyle}></Image>
        <View
          style={{
            paddingTop: 50,
            width: wp('100%'),
            backgroundColor: 'white',
            borderTopStartRadius: 10,
            borderTopRightRadius: 10,
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <View style={styles.item}>
            <Text style={styles.itemText}>Үйлчилгээний нэр</Text>
            <Text style={styles.infoText}>Анхаар</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Үйлчилгээний чиглэл</Text>
            <Text style={styles.infoText}>Front-end developer</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>Утас</Text>
            <Text style={styles.infoText}>89360339</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>И-Мэйл</Text>
            <Text style={styles.infoText}>burnee417@gmail.com</Text>
          </View>

          <Image
            style={{width: wp('100%'), height: 150}}
            source={require('../../../images/map.png')}></Image>
          <View style={styles.item}>
            <Text style={styles.itemText}>
              Улаанбаатар хот, СБД, 6-р хороо, Хангарьд ордны баруун талд
            </Text>
          </View>
        </View>
        <Text style={styles.fieldText}>Салбарууд</Text>
        <View
          style={{
            width: 100,
            height: 30,
            backgroundColor: 'purple',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
          }}>
          <Text style={{color: 'white'}}>13r horoolol</Text>
        </View>
      </ScrollView>
    </Modal>
  );
};
export default Profile;
const styles = StyleSheet.create({
  header: {
    width: wp('100%'),
    // flex: 1,
    backgroundColor: 'white',
    elevation: 3,
    height: 50,
    justifyContent: 'center',
  },
  headerText: {
    marginLeft: 15,
    fontSize: 18,
  },
  closeIcon: {
    position: 'absolute',
    right: 15,
  },
  infoText: {
    marginVertical: 7,
  },
  cameraStyle: {
    alignSelf: 'center',
    marginTop: -50,
    marginBottom: -55,
    width: 90,
    height: 90,
    borderRadius: 45,
    elevation: 10,
  },
  fieldText: {color: '#C9C9C9', textAlign: 'center'},
  info: {
    color: 'grey',
    fontSize: 14,
  },
  item: {
    borderBottomColor: '#DBD0D0',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  itemText: {
    color: 'grey',
    textAlign: 'center',
  },
});
