import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const SideDrawer = () => {
    return (
        <View style={styles.container}><Text>SideDrawer</Text></View>
    );
};

export default SideDrawer;

const styles = StyleSheet.create({
   container: {
       backgroundColor: 'white',
       flex: 1,
       padding: 10
   }
});