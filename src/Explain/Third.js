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
class Third extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.route.params.data,
    };
  }
  render() {
    return (
      <View>
        <FlatList
          ListHeaderComponent={
            <View>
              <View style={styles.header}>
                <TouchableOpacity
                  style={styles.backIcon}
                  onPress={() => this.props.navigation.navigate('Second')}>
                  <Icon name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{this.state.data.name}</Text>
                </View>
                <TouchableOpacity style={styles.icon}>
                  <Icon name="sound" size={24} color="white" />
                </TouchableOpacity>
              </View>
              {this.state.data.body.map((el) => (
                <View style={{marginHorizontal: 20, marginBottom: 10}}>
                  <Text
                    style={{
                      color: '#F6972A',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    {el.title}
                  </Text>
                  <Text>{el.text}</Text>
                </View>
              ))}
            </View>
          }
          data={this.state.data.contents}
          renderItem={renderItem}
          keyExtractor={(index) => index.toString()}
        />
      </View>
    );
  }
}
export default Third;
