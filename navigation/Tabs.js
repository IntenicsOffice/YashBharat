import { View, Text, Image, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, FONTS, icons } from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Epaper from '../screens/Epaper';
import CustomHeader from './CustomHeader';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{
            tabBarShowLabel:false
        }}>
            {/* <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        fontSize: 14,
                        // color: focused ? '#e92623' : COLORS.black,
                      },
                    tabBarIcon: ({ focused }) => (
                        <View>

                            <MaterialCommunityIcons name="home" color={focused ? COLORS.logo_color : COLORS.black} size={30}/>
                        
                        </View>
                    ),
                   
                }}
                
           
            /> */}


            <Tab.Screen
                name='Home'
                component={Home}
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
                                color: focused ? COLORS.logo_color : COLORS.black, top:-1
                            }}>
                            Home
                        </Text>
                    </View>
                ),}}
            />
            <Tab.Screen
                name='Epaper'
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
                                color: focused ? COLORS.logo_color : COLORS.black, top:-1
                            }}>
                            E-Paper
                        </Text>
                    </View>
                ),}}
            />

            {/* <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    headerShown: false,
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        fontSize: 12,
                        color: COLORS.black,
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" color={COLORS.black} size={24} />
                
                    ),
                }}
            /> */}
            
        </Tab.Navigator>
    )
}

export default Tabs