import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screen/HomeScreen';
import SignInScreen from './screen/SignInScreen';
import ProfileScreen from './screen/ProfileScreen';
import RidesScreen from './screen/RidesScreen';

import { DrawerContent } from './screen/DrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
  const testUser = {
    name: "Andrew Rose"
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent { ...props}/>} /*initialRouteName="Home"*/ >
        <Drawer.Screen name = "Home" component={HomeScreen}/>
        <Drawer.Screen name = "SignIn" component={SignInScreen}/>
        <Drawer.Screen name = "Rides" component={RidesScreen}/>
        <Drawer.Screen name = "Profile" component={ProfileScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
