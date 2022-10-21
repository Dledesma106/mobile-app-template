import React from 'react';
import { TextInput, Text, TextInputProps } from 'react-native';

import { styles } from './styles';

interface Props {
    title:string,
    value:string,
    custom:TextInputProps
}

function Input({ title, custom, value }:Props) {
    return (
        <>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={styles.text}
                value={value}
                {...custom}
            />
        </>
    );
}

export default Input;