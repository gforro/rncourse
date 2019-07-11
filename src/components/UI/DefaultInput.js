import React from 'react';
import {StyleSheet, TextInput} from "react-native";

const DefaultInput = ({style, ...props}) => {
    return (
        <TextInput underlineColorAndroid="transparent" {...props} style={[styles.input, style]}/>
    );
};

const styles = StyleSheet.create({
   input: {
       width: '100%',
       borderColor: '#eee',
       borderWidth: 1,
       padding: 5,
       marginTop: 8,
       marginBottom: 8
   }
});

export default DefaultInput;