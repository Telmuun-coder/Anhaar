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
import nuurJson from '../Nuur/nuurJson';
import List from '../List';
class Seemore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.route.params.data,
    };
  }
  render() {
    const {data} = this.state;

    return (
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.state.data.name}</Text>
          </View>
          <TouchableOpacity style={styles.icon}>
            <Icon name="sound" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Image
          style={{width: wp('100%'), height: hp('36%')}}
          source={this.state.data.bgImage}></Image>
        <View style={{margin: 20}}>
          <Text style={{color: '#F6972A', fontSize: 18}}>
            {data.body[0].title}
          </Text>
          {data.body[0].text ? (
            <Text style={{color: 'black', fontSize: 14, marginTop: 10}}>
              {data.body[0].text}
            </Text>
          ) : (
            <View />
          )}
        </View>
        <List
          link="Explain"
          url="Seemore"
          check={false}
          navigation={this.props.navigation}
          data={data.contents}
        />
      </ScrollView>
    );
  }
}
export default Seemore;
const styles = StyleSheet.create({
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  header: {
    flexDirection: 'row',
    elevation: 5,
    width: wp('100%'),
    height: 50,
    alignItems: 'center',
    backgroundColor: '#F6972A',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: 20,
  },
  backIcon: {
    position: 'absolute',
    left: 15,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  titleContainer: {
    width: wp('65%'),
  },
});
