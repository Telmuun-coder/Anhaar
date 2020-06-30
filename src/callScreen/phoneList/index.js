import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
class phoneList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.route.params.data,
    };
  }
  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          width: 400,
          height: 50,
          //   opacity: 0.7,
          backgroundColor: '#E2E2E2',
          marginVertical: 1,
          justifyContent: 'center',
        }}
        activeOpacity={0.7}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.text}>{item}</Text>
          <Ionicons
            style={{position: 'absolute', right: 60}}
            name="ios-call"
            size={24}
            color="grey"></Ionicons>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View>
        <View style={styles.MainContainer}>
          <View style={styles.header2}>
            <Text style={styles.headerText}>{this.state.item.name}</Text>
          </View>
          <FlatList
            data={this.state.item.phones}
            renderItem={this.renderItem}
            keyExtractor={(index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}
export default phoneList;
const styles = StyleSheet.create({
  MainContainer: {
    width: wp('100%'),
    // marginBottom: 100,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  header2: {
    width: wp('80%'),
    justifyContent: 'center',
  },
  text: {
    marginHorizontal: 20,
    color: 'black',
    fontSize: 14,
  },
  headerText: {
    marginLeft: 20,
    color: '#F6972A',
    fontSize: 18,
    marginVertical: 10,
  },
});
