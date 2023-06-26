import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './component/Login';
import Home from './component/Home';
import Profile from './component/Profile';
import About from './component/About';
import { Image } from 'react-native';

const stack= createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabMenu = () => {
  return (
    
    <Tab.Navigator initialRouteName="TrangChu" screenOptions={{ headerShown: false }}>
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
            <Image style={{ width: 30, height: 30 }} source={require('./component/image/shopping.png')} resizeMode="stretch" />

          )
        }}
      />
      <Tab.Screen name='Thông tin' component={Profile}
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
          <stack.Navigator  initialRouteName='DangNhap' screenOptions={{ headerShown: false }}>
            <stack.Screen name='DangNhap' component={Login} options={ {title:'Đăng Nhập'}} />
            <stack.Screen name='Trangchu' component={Home} options={ {title:''}} />
            <stack.Screen name='GioiThieu' component={About} options={ {title:''}} />
            <stack.Screen name='ThongTin' component={Profile} options={ {title:'Đăng Nhập'}} />
            <stack.Screen name='TabMenu' component={TabMenu} />


            
          </stack.Navigator>
      </NavigationContainer>

  );
}

