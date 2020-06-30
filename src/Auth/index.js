import React, {Component, useContext} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  TextInput,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import AppContext from '../AppContext.js';
import Button from '../Button';
const Login = (props) => {
  const {signIn} = useContext(AppContext);
  return (
    <View style={styles.MainContainer}>
      <View style={styles.item}>
        <Icon
          style={{marginRight: 10}}
          name="md-person"
          size={20}
          color="orange"
        />
        <View>
          <Text style={styles.itemText}>Нэр</Text>
          <TextInput style={styles.input} placeholder="username" />
        </View>
      </View>
      <View style={styles.item}>
        <Icon
          style={{marginRight: 10}}
          name="md-lock"
          size={20}
          color="orange"
        />
        <View>
          <Text style={styles.itemText}>Нууц үг</Text>
          <TextInput placeholder="password " style={styles.input} />
        </View>
      </View>
      <Button method={signIn} name="Нэвтрэх" />
      <TouchableOpacity
        style={{marginTop: 80}}
        onPress={() => props.navigation.navigate('Signup')}>
        <Text style={{fontSize: 16, color: 'orange', fontWeight: 'bold'}}>
          Бүртгүүлэх
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  MainContainer: {
    width: wp('100%'),
    height: hp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    color: 'grey',
    fontSize: 14,
  },
  item: {
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: 'white',
    // borderColor: '#F6972A',
    width: wp('100%'),
  },
  itemText: {
    color: 'grey',
  },
  input: {
    padding: 0,
  },
});
