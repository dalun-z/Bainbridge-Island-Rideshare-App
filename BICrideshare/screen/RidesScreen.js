import * as React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const axios = require('axios');
const Tab = createBottomTabNavigator();


const RidesScreen = ({navigation}) => {

    const Offers = () => {
        return (
        <Text>Offers Page</Text>
            )}

    const Requests = () => {
        return (
            <Text>Requests Page</Text>
        )}

    return (
        <Tab.Navigator>
        <Tab.Screen name="Offers" component={Offers} />
        <Tab.Screen name="Requests" component={Requests} />
        </Tab.Navigator>
    );
}

export default RidesScreen;