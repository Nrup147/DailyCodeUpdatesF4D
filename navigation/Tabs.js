import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import HistoryScreen from '../screens/HistoryScreen';
import CameraScreen from '../screens/CameraScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const CustomTabbarButton = ({children, onPress}) => (
  <TouchableOpacity
    style= {{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#7F5DF0',
            shadowOffset: {
              width: 0,
              height: 10
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5
    }}
    onPress={onPress}>
      <View style = {{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#e32f45'
      }}>
        {children}
      </View>
    </TouchableOpacity>
);

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 80,
          shadowColor: '#7F5DF0',
            shadowOffset: {
              width: 0,
              height: 10
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5
        }
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style= {{alignItems: 'center', justifyContent: 'center'}}>
              <Image source= {require('../assets/Icons/homeIcon.png')}
              resizeMode= 'contain'
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? '#e32f45' : '#748c94',
              }}></Image>
              <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}> Home </Text>
            </View>
          )
        }}
       />
      <Tab.Screen 
        name="Settings" 
        component={SettingScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style= {{alignItems: 'center', justifyContent: 'center'}}>
              <Image source= {require('../assets/Icons/settingIcon.png')}
              resizeMode= 'contain'
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? '#e32f45' : '#748c94',
              }}></Image>
              <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}> Setting </Text>
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="Camera" 
        component={CameraScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <Image source= {require('../assets/Icons/cameraIcon.png')}
              resizeMode= 'contain'
              style={{
                width: 30,
                height: 30,
                tintColor: '#fff',
              }}></Image>
          ),
          tabBarButton: (props) => (
            <CustomTabbarButton {...props} />
          )
        }}
      />
      <Tab.Screen 
        name="History" 
        component={HistoryScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style= {{alignItems: 'center', justifyContent: 'center'}}>
              <Image source= {require('../assets/Icons/historyIcon.png')}
              resizeMode= 'contain'
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? '#e32f45' : '#748c94',
              }}></Image>
              <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}> History </Text>
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style= {{alignItems: 'center', justifyContent: 'center'}}>
              <Image source= {require('../assets/Icons/profileIcon.png')}
              resizeMode= 'contain'
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? '#e32f45' : '#748c94',
              }}></Image>
              <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}> Profile </Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;