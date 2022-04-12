import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screen/HomeScreen';
import SignInScreen from './screen/SignInScreen';
import ProfileScreen from './screen/ProfileScreen';

const HomeStack = createNativeStackNavigator();
const SignInStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) =>(
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#deb887',
    },
    headerTintColor: '#6495ed',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      // Change the name of the tile of the current page
      // basically represent the current page title
      title:'PDSU',
      headerLeft: () => (
        <Icon.Button  name="menu" 
                      size={25} 
                      backgroundColor="#deb887" 
                      onPress = {() => {navigation.openDrawer()}}>
        </Icon.Button>
      )
    }} />
  </HomeStack.Navigator>
);

const SignInStackScreen = ({navigation}) =>(
  <SignInStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#deb887',
    },
    headerTintColor: '#ffff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <SignInStack.Screen name="SignIn" component={SignInScreen} options={{
      // Change the name of the tile of the current page
      title:'Bainbridge Carpool Sign-In',
      headerLeft: () => (
        <Icon.Button  name="menu" 
                      size={25} 
                      backgroundColor="#deb887" 
                      onPress = {() => {navigation.openDrawer()}}>
        </Icon.Button>
      )
    }} />
  </SignInStack.Navigator>
);

const ProfileStackScreen = ({navigation}) =>(
  <ProfileStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#deb887',
    },
    headerTintColor: '#ffff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <SignInStack.Screen name="Profile" component={ProfileScreen} options={{
      // Change the name of the tile of the current page
      title:'Your Profile',
      headerLeft: () => (
        <Icon.Button  name="menu" 
                      size={25} 
                      backgroundColor="#deb887" 
                      onPress = {() => {navigation.openDrawer()}}>
        </Icon.Button>
      )
    }} />
  </ProfileStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name = "Home" component={HomeStackScreen} />
        <Drawer.Screen name = "SignIn" component={SignInStackScreen} />
        <Drawer.Screen name = "Profile" component={ProfileScreen} />
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
