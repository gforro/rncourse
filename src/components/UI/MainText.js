import React from 'react';
import {StyleSheet, Text} from "react-native";

const MainText = ({children}) => {
    return (
        <Text style={styles.mainText}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    mainText: {
        color: 'black'
    }
});

export default MainText;