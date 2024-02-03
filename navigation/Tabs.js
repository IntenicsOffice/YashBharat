import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS,icons} from '../constants';
import Home from '../screens/Home';
import CategoryNews from '../screens/CategoryNews';
import CustomHeader from './CustomHeader';
import Profile from '../screens/Profile';
import MainComponent from '../screens/MainComponent';
import Epaper from '../screens/Epaper';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        // component={MainComponent}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.home}
                resizeMode="contain"
                style={{
                  height: focused ? 24 : 22,
                  width: focused ? 24 : 22,
                  tintColor: focused ? COLORS.logo_color : COLORS.black,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.logo_color : COLORS.black,
                  top: -1,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Epaper"
        component={Epaper}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.newspaper}
                resizeMode="contain"
                style={{
                  height: focused ? 24 : 22,
                  width: focused ? 24 : 22,
                  tintColor: focused ? COLORS.logo_color : COLORS.black,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.logo_color : COLORS.black,
                  top: -1,
                }}>
                Epaper
              </Text>
            </View>
          ),
        }}
      />

      {/* <Tab.Screen
        name="MainComponent"
        component={MainComponent}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.newspaper}
                resizeMode="contain"
                style={{
                  height: focused ? 24 : 22,
                  width: focused ? 24 : 22,
                  tintColor: focused ? COLORS.logo_color : COLORS.black,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.logo_color : COLORS.black,
                  top: -1,
                }}>
                News
              </Text>
            </View>
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default Tabs;
