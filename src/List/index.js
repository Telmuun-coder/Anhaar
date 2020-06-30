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
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconn from 'react-native-vector-icons/AntDesign';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }
  renderItem = ({item}) => {
    return item.header ? (
      <View style={styles.header2}>
        <Text style={styles.headerText}>{this.state.data.name}</Text>
      </View>
    ) : (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(this.props.link, {
            data: item,
            url: this.props.url,
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
      <SafeAreaView>
        <View style={styles.MainContainer}>
          <FlatList
            ListHeaderComponent={
              this.props.check ? (
                <View>
                  <View style={styles.header2}>
                    <TouchableOpacity
                      style={styles.backIcon}
                      onPress={() =>
                        this.props.navigation.navigate(this.props.url)
                      }>
                      <Iconn name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>
                    <View style={styles.titleContainer}>
                      <Text style={styles.title2}>{this.state.data.name}</Text>
                    </View>

                    <TouchableOpacity style={styles.icon2}>
                      <Iconn name="sound" size={24} color="white" />
                    </TouchableOpacity>
                  </View>
                  {this.state.data.body ? (
                    <View style={{marginHorizontal: 20, marginBottom: 10}}>
                      {this.state.data.body.map((el) => (
                        <View>
                          <Text
                            style={{
                              color: '#F6972A',
                              fontSize: 18,
                              fontWeight: 'bold',
                              marginVertical: 5,
                            }}>
                            {el.title}
                          </Text>
                          <Text>{el.text}</Text>
                        </View>
                      ))}
                    </View>
                  ) : (
                    <View />
                  )}
                </View>
              ) : (
                <View />
              )
            }
            data={this.props.check ? this.state.data.contents : this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default List;
const styles = StyleSheet.create({
  MainContainer: {
    width: wp('100%'),
    marginBottom: 10,
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
    backgroundColor: '#18DC73',
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
    fontSize: 20,
  },
  item: {
    width: wp('100%'),
    height: 50,
    backgroundColor: '#E2E2E2',
    marginVertical: 1,
    justifyContent: 'center',
  },
  title2: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  header2: {
    flexDirection: 'row',
    elevation: 3,
    width: wp('100%'),
    height: 50,
    alignItems: 'center',
    backgroundColor: '#F6972A',
    justifyContent: 'center',
  },
  icon2: {
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
