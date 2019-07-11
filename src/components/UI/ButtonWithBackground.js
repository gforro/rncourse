import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const ButtonWithBackground = ({onPress, color, children}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, {backgroundColor: color}]}>
            <Text>{children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black"
    }
});

export default ButtonWithBackground;