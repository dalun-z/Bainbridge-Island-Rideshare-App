import * as React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 2, alignItems: 'top', justifyContent: 'top' }}>
          <View style = {styles.profileImageContainer}>
            <Text>Insert Profile Pciture here</Text>
          </View>
          <View style = {styles.profileTextContainer}>
            <Text>Insert profile information here</Text>
            <Button
              title="Sign in here!"
              onPress={() => navigation.navigate("SignIn")} />
          </View>
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
    profileImageContainer: {
      width: '100%',
      flex: 3,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileTextContainer: {
      width: '100%',
      flex: 5,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });