import "react-native-gesture-handler";
import * as React from "react";
import { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { getData } from "./components/Utilities";

import AppLoading from "expo-app-loading";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

import HomeScreen from "./screen/HomeScreen";
import SignInScreen from "./screen/SignInScreen";
import ProfileScreen from "./screen/ProfileScreen";
import RidesScreen from "./screen/RidesScreen";

import { ThemeProvider } from "./styles/ThemeContext";
import { requiredFonts } from "./styles/main.style";
import SignUp from "./screen/SignUp";

const Drawer = createDrawerNavigator();

const App = () => {
    const testUser = {
        name: "Andrew Rose",
    };

    let [isLoaded] = useFonts(requiredFonts);

    if (!isLoaded) {
        return <AppLoading />;
    }

    // Signed in
    if (getData().uid !== null) {
        return (
            <ThemeProvider>
                <NavigationContainer>
                    <Drawer.Navigator initialRouteName="Home">
                        <Drawer.Screen name="Home" component={HomeScreen} />
                        <Drawer.Screen name="Rides" component={RidesScreen} />
                        <Drawer.Screen
                            name="Profile"
                            component={ProfileScreen}
                        />
                        <Drawer.Screen name="Sign Up" component={SignUp} />
                    </Drawer.Navigator>
                </NavigationContainer>
            </ThemeProvider>
        );
        // Not signed in
    } else {
        return (
            <ThemeProvider>
                <NavigationContainer>
                    <Drawer.Navigator initialRouteName="Home">
                        <Drawer.Screen name="Home" component={HomeScreen} />
                        <Drawer.Screen name="SignIn" component={SignInScreen} />
                        <Drawer.Screen name="Rides" component={RidesScreen} />
                        <Drawer.Screen name="Sign Up" component={SignUp} />
                    </Drawer.Navigator>
                </NavigationContainer>
            </ThemeProvider>
        );
    }
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
