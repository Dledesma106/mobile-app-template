import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

interface Props{
    title:string,
    action:()=>void
}

function Button({ title, action }:Props) {
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={action}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;