import React from 'react';
import {StyleSheet} from 'react-native';

import {Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto';


const requiredFonts = {
    Roboto_400Regular,
    Roboto_500Medium
}

const Colors = {
    LightMode: {
        BACKGROUND: "#FFFFFF",
        ACCENT: "#599583" 
    },
    DarkMode: {
        BACKGROUND: "#000",
        BACKGROUND_LIGHTER: "#2e2e2e", 
        ACCENT: "#599583",
        ACCENT_DARKER: "#0D4747",
        WHITE: "#FFF"
    }
}


const LightTheme = StyleSheet.create({
    default: {
        backgroundColor: Colors.LightMode.BACKGROUND
    }
});

const DarkTheme = StyleSheet.create({
    default: {
        backgroundColor: Colors.DarkMode.BACKGROUND,
        color: Colors.DarkMode.WHITE,
    },
})

const Themes = {
    LightMode: LightTheme,
    DarkMode: DarkTheme
}

let baseFontSize = 18;
let rem = baseFontSize;

const GlobalStyle = StyleSheet.create({
    mainFont: {
        fontFamily: 'Roboto_400Regular',
        fontSize: baseFontSize
    },

    h2: {
        fontFamily: 'Roboto_500Medium',
        fontSize: (baseFontSize*2)
    },

    containerCenter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
    },

    padMedium: {
        padding: (2*rem)
    }
});

export {Themes, Colors, GlobalStyle, requiredFonts}