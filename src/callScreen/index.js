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
// import Icon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';
import phoneJson from '../data/phone_numbers.json';
class callScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: phoneJson.list,
    };
  }
  renderItem = ({item}) => {
    return item.header ? (
      <View style={styles.header2}>
        <Text style={styles.headerText}>{item.name}</Text>
      </View>
    ) : (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('phoneList', {
            data: item,
          })
        }
        style={styles.item}
        activeOpacity={0.7}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: wp('90%')}}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
          <Icon
            style={{position: 'absolute', right: 10}}
            name="keyboard-arrow-right"
            size={32}
            color="grey"></Icon>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Утасны жагсаалт</Text>
        </View>
        <View style={styles.MainContainer}>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}
export default callScreen;
const styles = StyleSheet.create({
  MainContainer: {
    width: wp('100%'),
    marginBottom: 100,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  header: {
    elevation: 3,
    width: wp('100%'),
    height: 50,
    backgroundColor: '#F6972A',
    justifyContent: 'center',
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
    marginVertical: 5,
  },
  item: {
    width: wp('100%'),
    height: 50,
    backgroundColor: '#E2E2E2',
    marginVertical: 1,
    justifyContent: 'center',
  },
});
