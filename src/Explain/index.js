import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import renderItem from './renderItem';
import List from '../../src/List';
class Explain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.route.params.data,
      url: this.props.route.params.url,
    };
  }
  render() {
    let url = this.state.url;
    return (
      <View>
        {this.state.data.contents[0].icon ? (
          <FlatList
            ListHeaderComponent={
              <View style={styles.header}>
                <TouchableOpacity
                  style={styles.backIcon}
                  onPress={() => this.props.navigation.navigate(url)}>
                  <Icon name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{this.state.data.name}</Text>
                </View>
                <TouchableOpacity style={styles.icon}>
                  <Icon name="sound" size={24} color="white" />
                </TouchableOpacity>
              </View>
            }
            data={this.state.data.contents}
            renderItem={renderItem}
            keyExtractor={(index) => index.toString()}
          />
        ) : (
          <View>
            <List
              link="Second"
              url={this.state.url}
              check={true}
              navigation={this.props.navigation}
              data={this.state.data}
            />
          </View>
        )}
      </View>
    );
  }
}
export default Explain;
