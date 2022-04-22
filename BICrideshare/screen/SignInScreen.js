import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, TextInput } from 'react-native';

const axios = require('axios');

// Change this to be your local machine's IP
const url = 'http://10.0.0.89:8080'
  
//AWS EC2 IP
// const url = 'http://44.226.145.15:8080'

const SignInScreen = ({navigation}) => {
  
  
  // State management for input fields
  const [usernameText, setUsernameText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [confirmPasswordText, setConfirmPasswordText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [phoneNumberText, setPhoneNumberText] = useState('');
  const [addressText, setAddressText] = useState('');

  // Handler functions to change input field states
  function usernameHandler(i) {
    setUsernameText(i);
  };
  function passwordHandler(i) {
    setPasswordText(i);
  };
  function confirmPasswordHandler(i) {
    setConfirmPasswordText(i);
  };
  function emailHandler(i) {
    setEmailText(i);
  };
  function phoneNumberHandler(i) {
    setPhoneNumberText(i);
  };
  function addressHandler(i) {
    setAddressText(i);
  };

  // Function to clear input fields
  function clearText() {
    setUsernameText('');
    setPasswordText('');
    setConfirmPasswordText('');
    setEmailText('');
    setPhoneNumberText('');
    setAddressText('');
  }

    return (
      <View style= {{ flex: 1}}>
        <View style={styles.container}>
          <Text>Sign In Screen</Text>
          <TextInput
            style={styles.input}
            placeholder = "Username"
            onChangeText={usernameHandler}
            value={usernameText}
          />
          <TextInput
            style={styles.input}
            placeholder = "Password"
            onChangeText={passwordHandler}
            value={passwordText}
          />
          <TextInput
            style={styles.input}
            placeholder = "Confirm Password"
            onChangeText={confirmPasswordHandler}
            value={confirmPasswordText}
          />
          <TextInput 
            style={styles.input}
            placeholder = "Email"
            onChangeText={emailHandler}
            value={emailText}
          />
          <TextInput 
            style={styles.input}
            placeholder = "Phone Nunber"
            onChangeText={phoneNumberHandler}
            value={phoneNumberText}
          />
          <TextInput
            style={styles.input}
            placeholder = "Address"
            onChangeText={addressHandler}
            value={addressText}
          />
        </View>
        <View styles={styles.buttonContainer}>
        <Button
            title="Send input fields to backend"
            onPress={ () => {
              axios.post(url + '/signin', {
                username: usernameText,
                password: passwordText,
                confirmPassword: confirmPasswordText,
                email: emailText,
                phone: phoneNumberText,
                address: addressText
              })
              clearText();
              navigation.navigate("Home")
            }}
          />
          <Button
            title="Send new user to DB"
            onPress={ () => {
              axios.post(url + '/signup', {
                username: usernameText,
                password: passwordText,
                confirmPassword: confirmPasswordText,
                email: emailText,
                phone: phoneNumberText,
                address: addressText
              })
              clearText();
              navigation.navigate("Home")
            }}
          />
          <Button 
            title ="go to the same page again"
            onPress={ () => navigation.navigate("SignIn")}
          />
          <Button 
            title ="back to home"
            onPress={ () => navigation.navigate("Home")}
          />
          <Button 
            title ="go back"
            onPress={ () => navigation.goBack()}
          />
          <Button 
            title ="back to the first page"
            onPress={ () => navigation.popToTop()}
          />
        </View>
      </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer: {
      flex: 3,
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    },
    input: {
      padding: 2,
      width: '90%',
      height: '7%',
      borderWidth: 2,
      borderColor: 'gray'
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'gray'
    }
  });