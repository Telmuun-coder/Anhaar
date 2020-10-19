import React, {useState} from 'react';
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
  const [pageNum, setPageNum] = useState(0);
  const _onScroll = (e) => {
    setPageNum(
      Math.round(parseFloat(e.nativeEvent.contentOffset.x / SCREEN_WIDTH)),
    );
  };
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <ScrollView
        onScroll={_onScroll.bind(this)}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        <ItemScreen wp={280} hp={180} data={splashJson[0]} />
        <ItemScreen wp={275} hp={90} data={splashJson[1]} />
        <ItemScreen wp={165} hp={65} data={splashJson[2]} />
        <ItemScreen wp={215} hp={115} data={splashJson[3]} />
      </ScrollView>
      <View style={styles.pageNums}>
        <View
          style={[styles.num, pageNum === 0 && {backgroundColor: 'white'}]}
        />
        <View
          style={[styles.num, pageNum === 1 && {backgroundColor: 'white'}]}
        />
        <View
          style={[styles.num, pageNum === 2 && {backgroundColor: 'white'}]}
        />
        <View
          style={[styles.num, pageNum === 3 && {backgroundColor: 'white'}]}
        />
      </View>
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
  num: {
    width: 5,
    height: 5,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'white',
  },
  pageNums: {
    position: 'absolute',
    bottom: 80,
    left: '40%',
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
