import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from './navigation/Tabs'
import DetailNews from './screens/DetailNews'
import MainComponent from './screens/MainComponent'
import Epaper from './screens/CategoryNews'
import CategoryNews from './screens/CategoryNews'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}/>
        <Stack.Screen name="DetailNews" component={DetailNews} options={{ headerShown: false }}/>
        <Stack.Screen name="MainComponent" component={MainComponent} options={{ headerShown: false }}/>
        <Stack.Screen name="CategoryNews" component={CategoryNews} options={{ headerShown: false }}/>
        <Stack.Screen name="Epaper" component={Epaper} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App