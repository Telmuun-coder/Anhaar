import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const Text1 = (props) => {
  return (
    <View>
      <Text style={styles.info}>{props.title}</Text>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};
export default Text1;
const styles = StyleSheet.create({
  info: {
    color: 'grey',
    fontSize: 11,
  },

  text: {
    fontSize: 15,
  },
});
