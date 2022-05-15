import React, {useContext} from 'react';
import {Text, View} from 'react-native';

import SignUpForm from '../components/forms/SignUpForm';
import {GlobalStyle} from '../styles/main.style';

import {ThemeContext} from '../styles/ThemeContext';

function SignUp(props) {

    const {theme, colors} = useContext(ThemeContext);

    return(
        <View style={GlobalStyle.containerCenter}>
            <View style={[GlobalStyle.containerMedium]}>
                <Text style={[GlobalStyle.mainFont, GlobalStyle.h2]}>Sign Up</Text>
                <SignUpForm />
            </View>
        </View>
    )

}

export default SignUp;