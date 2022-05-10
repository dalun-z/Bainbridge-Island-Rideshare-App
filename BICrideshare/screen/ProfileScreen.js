import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { getData } from "../components/Utilities";

const axios = require('axios');
// Change this to be your local machine's IP
const url = 'http://10.0.0.89:8080'
    
//AWS EC2 IP
// const url = 'http://44.226.145.15:8080'

const ProfileScreen = ({ navigation}) => {
    if (getData()) {
      const user = getData();
      return (
          <View style={styles.container}>
            <View style = {styles.profileImageContainer}>
              <Image source = {require('../assets/elon.png')} style = {styles.profileImageCircle} />
              <Text style = {styles.profileImageName}>{user.first + " " + user.last}</Text>
            </View>
            
            <View style = {styles.profileTextContainer}>
              <View style = {styles.profileTextBox}>
                <Text style={styles.profileTextEntry}>{user.uid}</Text>
              </View>
              <View style = {styles.profileTextBox}>
                <Text style={styles.profileTextEntry}>Phone Number</Text>
              </View>
              <View style = {styles.profileTextBox}>
                <Text style={styles.profileTextEntry}>Address?</Text>
              </View>
              <View style = {styles.profileTextBox}>
                <Text style={styles.profileTextEntry}>Rating</Text>
              </View>
              <View style = {styles.profileTextBox}>
                <Text style={styles.profileTextEntry}>Rides Completed</Text>
              </View>
              <View style = {styles.profileTextBox}>
                <Text style={styles.profileTextEntry}>Rider/Driver</Text>
              </View>
            </View>
            <View style = {styles.signOutButton}>
                <Button 
                  title="Sign out!"
                  onPress={() => navigation.navigate("Home")}
                />
                  <Button 
                  title="Test Query"
                  onPress={ () => {
                    axios.get(url + '/userTest')
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
          </View>
      );
  } else {
    return (
      navigation.navigate("SignIn")
    );
  };
}

export default ProfileScreen;

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
      borderWidth: 3,
      borderColor: 'black'
    },
    profileImageCircle: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      overflow: "hidden",
      borderWidth: 3,
      borderColor: "black"
    },
    profileImageName: {
      alignItems: 'flex-end',
      fontSize: 25,
      color: 'white'
    },
    profileTextContainer: {
      width: '100%',
      flex: 5,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      alignContent: 'space-between',
      paddingTop: 10
    },
    profileTextBox: {
      // borderTopWidth: 2,
      // borderTopColor: 'gray',
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      width: '100%',
      padding: 20
    },
    profileTextEntry: {
      
    },
    signOutButton: {
      flex: 2,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: 2
    }
  });