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
// import aidJson from '../../src/data/turgen.json';
import aidJson from '../../src/Nuur/nuurJson.js';
import List from '../../src/List';
class firstAid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: aidJson,
    };
  }

  render() {
    console.log(this.state.data);
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>{this.state.data.name}</Text>
          <TouchableOpacity style={styles.icon}>
            <Icon name="sound" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Image
          style={{width: wp('100%'), height: hp('30%')}}
          source={this.state.data.image}></Image>
        <View style={{margin: 20}}>
          <Text
            style={{
              color: '#F6972A',
              fontSize: 18,
              marginBottom: 10,
            }}>
            {this.state.data.body[0].title}
          </Text>
          <Text style={{color: 'black', fontSize: 14}}>
            {this.state.data.body[0].text}
          </Text>
          <Text style={{color: '#F6972A', fontSize: 18, marginVertical: 10}}>
            {this.state.data.body[1].title}
          </Text>
          <Text style={{color: 'black', fontSize: 14}}>
            {this.state.data.body[1].text}
          </Text>
        </View>
        <List
          link="Explain"
          url="firstAid"
          navigation={this.props.navigation}
          data={this.state.data.contents}
        />
      </ScrollView>
    );
  }
}
export default firstAid;
const styles = StyleSheet.create({
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  header: {
    flexDirection: 'row',
    elevation: 3,
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
});
