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
import Form from '../Form';
import Button from '../../Button';
const Field = (props) => {
  return (
    <Modal visible={props.isModalVisible}>
      <View style={styles.header}>
        <Text style={styles.headerText}>САЛБАР НЭМЭХ</Text>
        <TouchableOpacity
          onPress={() => props.closeField()}
          style={styles.closeIcon}>
          <Iconn name="ios-close" size={32} color="black" />
        </TouchableOpacity>
      </View>
      <Form
        titleChange={props.titleChange}
        isModalVisible={props.isModalVisible}
      />
      <Button method={props.saveField} name="Хадгалах" />
    </Modal>
  );
};
export default Field;
const styles = StyleSheet.create({
  header: {
    width: wp('100%'),
    backgroundColor: 'white',
    elevation: 3,
    height: 50,
    justifyContent: 'center',
  },
  headerText: {
    marginLeft: 15,
    fontSize: 21,
  },
  closeIcon: {
    position: 'absolute',
    right: 15,
  },
});
