import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './component/Login';
import Home from './component/Home';
import Profile from './component/Profile';
import About from './component/About';
import MyTour from './component/MyTour';
import DetailTour from './component/DetailTuor';
import ChangePass from './component/ChangePass';


import { Image } from 'react-native';
import SignUp from './component/SignUp';

const stack= createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabMenu = (props) => {
  const phoneFromLogin = props.route.params.phoneFromLogin;
  console.log("Tab :" +phoneFromLogin);
  return (
    
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Trang chủ' component={Home}
        options={{
          tabBarIcon: () => (
            <Image style={{ width: 30, height: 30 }} source={require('./component/image/homeicon.png')} resizeMode="stretch" />

          )
        }}
      />
      <Tab.Screen name='Giới thiệu' component={About}
        options={{
          tabBarIcon: () => (
            <Image style={{ width: 25, height: 25 }} source={require('./component/image/about.png')} resizeMode="stretch" />

          )
        }}
      />
      <Tab.Screen name='Tour của tôi' component={MyTour}
        options={{
          tabBarIcon: () => (
            <Image style={{ width: 30, height: 30 }} source={require('./component/image/shopping.png')} resizeMode="stretch" />

          )
        }}
      />
      <Tab.Screen name='Thông tin' component={Profile} initialParams={{phoneFromLogin:phoneFromLogin}}
        options={{
          tabBarIcon: () => (
            <Image style={{ width: 30, height: 30 }} source={require('./component/image/profile.png')} resizeMode="stretch" />

          )
        }}
      />
    </Tab.Navigator>
  )

}


export default function App() {
  

  return (
   <NavigationContainer>
          <stack.Navigator  initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <stack.Screen name='Login' component={Login} options={ {title:'Đăng Nhập'}} />
            <stack.Screen name='Home' component={Home} options={ {title:''}} />
            <stack.Screen name='About' component={About} options={ {title:''}} />
            <stack.Screen name='MyTour' component={MyTour} options={ {title:''}} />
            <stack.Screen name='DetailTour' component={DetailTour} options={ {title:''}} />
            <stack.Screen name='Profile' component={Profile} options={ {title:''}} />
            <stack.Screen name='TabMenu' component={TabMenu} />
            <stack.Screen name='ChangePass' component={ChangePass} />
            <stack.Screen name='SignUp' component={SignUp} />


            
          </stack.Navigator>
      </NavigationContainer>

  );
}

