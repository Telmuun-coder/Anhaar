import React, {useContext, useState, useEffect} from 'react';
import {
  StatusBar,
  Dimensions,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import Third from './src/Explain/Third';
import Second from './src/Explain/Second';
import Splash from './src/Auth/Splash';
import Explain from './src/Explain';
import Nuur from './src/Nuur';
import Home from './src/Home';
import Seemore from './src/Seemore';
import callScreen from './src/callScreen';
import phoneList from './src/callScreen/phoneList';
import firstAid from './src/firstAid';
import Signup from './src/Auth/Signup';
import Login from './src/Auth/index';
import Notif from './src/Notif';
import tools from './src/tools';
import QrcodeScreen from './src/QrcodeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Foundation';
import Iconn from 'react-native-vector-icons/Entypo';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AppContext from './src/AppContext.js';
import axios from './axios';
import Loader from './src/Loader/Loader';
import AsyncStorage from '@react-native-community/async-storage';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const CallStack = createStackNavigator();
let userInfo;

function CallStackScreen() {
  return (
    <CallStack.Navigator>
      <CallStack.Screen
        options={{
          headerShown: false,
        }}
        name="callScreen"
        component={callScreen}
      />
      <CallStack.Screen
        options={{
          headerTintColor: 'white',
          headerTitle: 'Emergency telephone numbers',
          headerStyle: {
            backgroundColor: '#F6972A',
          },
        }}
        name="phoneList"
        component={phoneList}
      />
    </CallStack.Navigator>
  );
}
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={Nuur} />
      <HomeStack.Screen name="Explain" component={Explain} />
      <HomeStack.Screen name="Second" component={Second} />
      <HomeStack.Screen name="Seemore" component={Seemore} />
    </HomeStack.Navigator>
  );
}
const AidStack = createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
function AidStackScreen() {
  return (
    <AidStack.Navigator headerMode="none">
      <AidStack.Screen name="firstAid" component={firstAid} />
      <AidStack.Screen name="Explain" component={Explain} />
      <AidStack.Screen name="Second" component={Second} />
      <AidStack.Screen name="Third" component={Third} />
    </AidStack.Navigator>
  );
}
const AuthStack = createStackNavigator();
function AuthStackScreen() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerTintColor: 'black',
      }}>
      <AuthStack.Screen
        component={Login}
        options={{headerShown: false}}
        name="Login"></AuthStack.Screen>

      <AuthStack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerTitle: 'Бүртгүүлэх',
          headerTitleAlign: 'center'
        }}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Check"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'ios-home';
          } else if (route.name === 'Aid') {
            return <Icon name="first-aid" size={size} color={color} />;
          } else if (route.name === 'Call') {
            iconName = 'ios-call';
          } else if (route.name === 'Check') {
            return <MatIcon name="qrcode-scan" size={29} color={color} />;
          } else {
            iconName = 'ios-notifications';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {height: SCREEN_HEIGHT * 0.07},
        activeTintColor: '#F6972A',
        inactiveTintColor: 'grey',
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Call" component={CallStackScreen} />
      <Tab.Screen name="Check">{() => <Home medeelel={userInfo} />}</Tab.Screen>
      <Tab.Screen name="Aid" component={AidStackScreen} />
      <Tab.Screen name="Notif" component={Notif} />
    </Tab.Navigator>
  );
}
const RootStack = createStackNavigator();
const MainApp = () => {
  const isSign = useContext(AppContext);
  const [isSplash, setSplash] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoged, setIsLoged] = useState(isSign);
  // const [aldaa, setAldaa] = useState(null);
  const authContext = React.useMemo(() => {
    return {
      signIn: async (registerNumber, password, setErr) => {
        const datas = {
          registrationNumber: registerNumber,
          password: password,
        };
        setLoading(true);
        try {
          const res = await axios.post('/anhaar/user/signIn', datas);
          if (res.data.message === 'Алдаа гарлаа') setErr(true);
          else {
            // setAldaa(false);
            await AsyncStorage.setItem('token', res.data.entity);
            await AsyncStorage.setItem('username', registerNumber);
            //Хэрэглэгчийн мэдээллийг татаж авч байна
            axios.defaults.headers.common = {
              Authorization: `Bearer ${res.data.entity}`,
            };
            userInfo = await axios.get('/anhaar/user/get').then((res) => {
              return res.data.entity;
            });
            //Хэрэглэгчийн мэдээллийг хадгалж авч байна
            await AsyncStorage.multiSet([
              ['firstName', userInfo.firstName],
              ['status', userInfo.userStatus.status],
              [
                'endDate',
                userInfo.userStatus.endDate === null
                  ? ''
                  : userInfo.userStatus.endDate,
              ],
              ['qrCode', userInfo.qrCode],
              ['sex', userInfo.sex],
              ['dateOfBirth', userInfo.dateOfBirth],
            ]);
          }
        } catch (e) {
          if (e.message === 'Network Error')
            alert('Та интернет холболтоо шалгана уу.');
          console.log('Алдаа гарлаашүүдээ ' + e.message);
        } finally {
          setLoading(false);
          setIsLoged(await AsyncStorage.getItem('token'));
        }
      },
      signOut: async () => {
        setLoading(true);
        const keys = [
          'token',
          'firstName',
          'status',
          'endDate',
          'qrCode',
          'sex',
          'dateOfBirth',
        ];
        try {
          await AsyncStorage.multiRemove(keys);
          //await AsyncStorage.removeItem('token');
          setIsLoged(null);
        } catch (e) {
          console.log('Log out хийхэд алдаа гарав ' + e);
        } finally {
          setLoading(false);
        }
      },
    };
  }, []);
  const splashWatch = async () => {
    await AsyncStorage.setItem('splash', 'uzev');
    setSplash(true);
  };
  const check = async () => {
    const splash = await AsyncStorage.getItem('splash');
    if (splash === null) splashWatch();
    const token = await AsyncStorage.getItem('token');
    if (token !== null) setIsLoged(token);
  };
  const requestPermissions = async () => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
      });
    }

    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  };
  useEffect(() => {
    requestPermissions();
    check();
  }, []);
  if (isSplash) return <Splash setIsLoading={setSplash} />;
  else
    return (
      <AppContext.Provider value={authContext}>
        <StatusBar hidden={true} />
        <NavigationContainer>
          <RootStack.Navigator headerMode="none">
            {isLoged ? (
              <RootStack.Screen component={TabScreen} name="TabScreen" />
            ) : (
              <RootStack.Screen
                // component={AuthStackScreen}
                name="AuthStack">
                {() => (
                  <>
                    <AuthStackScreen />
                    {loading && <Loader visible={loading} />}
                  </>
                )}
              </RootStack.Screen>
            )}
          </RootStack.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    );
};
export default MainApp;
