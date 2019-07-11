import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import startMainTabs from "./startMainTabs";

const AuthScreen = () => {
    return (
        <View style={styles.rootView}>
            <View style={{alignItems: 'center'}}><Text>Hello Gabriel</Text></View>
            <Button title="Login" onPress={() => startMainTabs()} />
        </View>
    );
};

export default AuthScreen;

const styles = StyleSheet.create({
   rootView: {
       justifyContent: 'center',
       margin: 10
   }
});