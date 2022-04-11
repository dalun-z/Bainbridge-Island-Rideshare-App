import * as React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Welcome to PDSU</Text>
          <Button 
            title ="click me to jump to sign in page"
            onPress={ () => navigation.navigate("SignIn")}
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