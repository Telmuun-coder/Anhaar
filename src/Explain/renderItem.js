import React from 'react';
import {View, Image, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles';
const renderItem = ({item, index}) => {
  return (
    <View style={styles.item}>
      <View style={styles.number}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 11}}>
          {index + 1}
        </Text>
      </View>
      <Image style={styles.image} source={item.icon}></Image>
      <View
        style={{
          width: wp('85%'),
          marginBottom: 20,
        }}>
        <Text style={{color: 'black', fontSize: 14}}>{item.text}</Text>
      </View>
    </View>
  );
};
export default renderItem;
