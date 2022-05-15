import React, { useRef } from "react";
import {Button, View} from 'react-native';

import FormField from "./FormField";

function SignUpForm() {
    const formEl = useRef();

    const handleSubmit = (event) => {
        
    };

    return (
        <View>
            <FormField label="email"/>
            <FormField label="password" type="password" />

            <Button title="Submit"/>
        </View>
    );
}

export default SignUpForm;
