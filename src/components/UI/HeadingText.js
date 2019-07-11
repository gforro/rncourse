import React from 'react';
import {StyleSheet, Text} from "react-native";

const HeadingText = ({style, children, ...props}) => {
    return (
        <Text style={[styles.textHeading, style]} {...props}>{children}</Text>
    );
};

const styles  = StyleSheet.create({
    textHeading: {
        fontSize: 28,
        fontWeight: 'bold'
    }
});

export default HeadingText;