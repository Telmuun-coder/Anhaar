import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
import ItemScreen from './ItemScreen';
import splashJson from './splashJson';
const Splash = (props) => {
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <ScrollView
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        <ItemScreen wp={280} hp={180} data={splashJson[0]} />
        <ItemScreen wp={275} hp={90} data={splashJson[1]} />
        <ItemScreen wp={165} hp={65} data={splashJson[2]} />
        <ItemScreen wp={215} hp={115} data={splashJson[3]} />
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          props.setIsLoading(false);
        }}
        style={styles.button}>
        <Text style={styles.text}>ЭХЛЭХ</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Splash;
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});
