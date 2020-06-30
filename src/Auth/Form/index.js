import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Form = (props) => {
  return (
    <View
      style={{
        paddingTop: props.isModalVisible ? 0 : 50,
        width: wp('100%'),
        backgroundColor: 'white',
        borderTopStartRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        marginTop: 10,
      }}>
      <View style={styles.item}>
        <Text style={styles.itemText}>Үйлчилгээний нэр</Text>
        <TextInput
          onChangeText={(e) => props.titleChange(e)}
          style={styles.input}
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Үйлчилгээний чиглэл</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Утас</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.lastItem}>
        <Text style={styles.itemText}>И-Мэйл</Text>
        <TextInput style={styles.input} />
      </View>
      <Image
        style={{width: wp('100%'), height: 150}}
        source={require('../../../images/map.png')}></Image>
      <View style={styles.lastItem}>
        <Text style={styles.itemText}>Байгууллагын хаяг</Text>
        <View style={{width: wp('75%'), marginVertical: 10}}>
          <Text style={{color: 'black'}}>
            Улаанбаатар хот, СБД, 6-р хороо, Хангарьд ордны баруун талд
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Form;
const styles = StyleSheet.create({
  info: {
    color: 'grey',
    fontSize: 14,
  },
  item: {
    borderBottomColor: '#DBD0D0',
    borderBottomWidth: 1,
    marginHorizontal: 15,
  },
  lastItem: {
    marginHorizontal: 15,
  },
  itemText: {
    color: '#C9C9C9',
    fontSize: 13,
  },
  input: {
    padding: 5,
  },
});
