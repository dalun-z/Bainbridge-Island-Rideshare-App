import * as React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const SignInScreen = ({navigation}) =>{
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Sign In Screen</Text>
        <Button 
          title ="go to the same page again"
          onPress={ () => navigation.push("SignIn")}
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
  });