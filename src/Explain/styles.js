import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default styles = StyleSheet.create({
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
  number: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    backgroundColor: '#F67A58',
    position: 'absolute',
    left: 25,
    top: 25,
  },
  item: {
    width: wp('100%'),
    backgroundColor: 'white',
    borderBottomWidth: 0.2,
    elevation: 5,
    borderBottomColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
});
