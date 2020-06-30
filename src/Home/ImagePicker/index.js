import React, {Component} from 'react';
import {View, Text, Image, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class ImagePickerr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourcePath: {},
    };
  }
  imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = {uri: res.uri};
        // console.log('response', JSON.stringify(res));
        this.setState({
          filePath: res,
          fileData: res.data,
          fileUri: res.uri,
        });
      }
    });
  };

  render() {
    const {photo} = this.state;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={{uri: this.state.fileUri}}
          style={{width: 300, height: 300}}
        />
        <Button title="Choose Phddo" onPress={this.imageGalleryLaunch} />
      </View>
    );
  }
}
