import React, {useContext, useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Dimensions} from 'react-native';
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
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const CallStack = createStackNavigator();

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
      <Tab.Screen name="Check" component={Home} />
      <Tab.Screen name="Aid" component={AidStackScreen} />
      <Tab.Screen name="Notif" component={Notif} />
    </Tab.Navigator>
  );
}
const RootStack = createStackNavigator();
const MainApp = () => {
  const isSign = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(isSign);
  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setUserToken('utga');
      },
      signOut: () => {
        setUserToken(null);
      },
    };
  }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);
  if (isLoading) {
    return <Splash setIsLoading={setIsLoading} />;
  }
  return (
    <AppContext.Provider value={authContext}>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <RootStack.Navigator
          // screenOptions={{
          //   gestureEnabled: true,
          //   gestureDirection: 'horizontal-inverted',
          //   transitionSpec: {
          //     open: config,
          //     close: config,
          //   },
          // }}
          headerMode="none">
          {userToken ? (
            <RootStack.Screen component={TabScreen} name="TabScreen" />
          ) : (
            <RootStack.Screen component={AuthStackScreen} name="AuthStack" />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};
export default MainApp;
