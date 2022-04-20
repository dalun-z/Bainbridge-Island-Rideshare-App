import * as React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const axios = require('axios');

const HomeScreen = ({navigation}) => {
  // Change this to be your local machine's IP
  const url = 'http://10.0.0.89:8080'

  // Eventually change to AWS EC2 IP
  // const url = 'http://44.226.145.15:8080'

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Welcome to Bainbridge Island Carpooling App</Text>
          <Button 
            title ="click me to jump to sign in page (2)"
            onPress={ () => navigation.navigate("SignIn")}
          />
          <Button
            title="Click me for backend"
            onPress={ () => {
              axios.get(url + '/api')
                .then(response => {
                  // handle success
                  console.log(response.data);
                })
                .catch(error => {
                  // handle error
                  console.log(error);
                })}}
          />
          <Button
            title="Click me for backend POST"
            onPress={ () => {
              axios.post(url + '/post', { title: 'Test data sent to backend' })
                .then(response => {
                  // handle success
                  console.log(response.data);
                })
                .catch(error => {
                  // handle error
                  console.log(error);
                })}}
          />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });



