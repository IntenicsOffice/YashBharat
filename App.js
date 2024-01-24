import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
// import SplashScreen from './screens/SplashScreen';
// import Login from './screens/Login';
import Home from './screens/Home'
import Profile from './screens/Profile'
import Tabs from './navigation/Tabs'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator  
          
        >
        {/* <CustomHeader title={"Yash Bharat"} /> */}
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}/>

          {/* <Stack.Screen name="AddMember" component={AddMember} /> */}
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App