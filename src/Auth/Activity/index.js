import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import Iconn from 'react-native-vector-icons/Ionicons';
import Field from '../Field';
import Form from '../Form';
import Button from '../../Button';
const Activity = (props) => {
  const [isModalVisible, setModal] = useState(false);
  const [title, setTitle] = useState(' ');
  const [list, setList] = useState(['13r horoolol']);
  const addField = () => {
    setModal(!isModalVisible);
  };
  const titleChange = (e) => {
    setTitle(e);
  };
  const saveField = () => {
    list.push(title);
    setList(list);
    alert('Amjilttai hadgallaa');
    setModal(!isModalVisible);
  };
  return (
    <ScrollView>
      <TouchableOpacity style={styles.cameraStyle}>
        <Icon name="camera" size={25} color="black" />
      </TouchableOpacity>
      <Form isModalVisible={isModalVisible} />
      <View style={{marginVertical: 10}}>
        <Text style={styles.fieldText}>Салбарууд</Text>
      </View>
      <View>
        {list.map((e, i) => {
          if (i == -1) return <View />;
          else
            return (
              <View style={styles.addField}>
                <Text style={{marginLeft: 15}} Key={e}>
                  {e}
                </Text>
                <Iconn
                  style={{position: 'absolute', right: 15}}
                  name="ios-arrow-forward"
                  size={24}
                  color="black"
                />
              </View>
            );
        })}
      </View>
      <View style={styles.addField}>
        <Text style={styles.fieldText}>Салбар нэмэх</Text>

        <TouchableOpacity
          onPress={() => addField()}
          style={{position: 'absolute', right: 10}}>
          <Iconn name="ios-add" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <Button name="Хадгалах" />
      <Field
        titleChange={titleChange}
        saveField={saveField}
        isModalVisible={isModalVisible}
        closeField={addField}
      />
    </ScrollView>
  );
};
export default Activity;
const styles = StyleSheet.create({
  cameraStyle: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: -55,
    width: 90,
    height: 90,
    borderRadius: 45,
    elevation: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addField: {
    backgroundColor: 'white',
    marginBottom: 2,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  fieldText: {color: '#C9C9C9', marginLeft: 15},
});
