import React, {useState} from 'react';

import {TextInput} from 'react-native';

/**
 * 
 * @param {string} label Label for the field input
 * @param {string} type Type of Field to create. Optional. Defaults to Text
 */
function FormField(props) {
    const label = props.label;
    const type = props.type ? props.type.toLowerCase() : "";

    const [value, setValue] = useState('');

    const handleInput = (event) => {
        setValue(event.target.value);
    }

    let secureText = false;
    switch(type) {
        case "password":
            secureText = true;
            break;
    }

    return (
        <TextInput placeholder={label} name={label} onChange={handleInput} 
            secureTextEntry={secureText} />
    );
}

export default FormField;