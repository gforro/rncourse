import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";


const PickPlace = () => {
    return (
        <View style={styles.container}>
            <View style={styles.placeHolder}>
                <Text>Map</Text>
            </View>
            <View style={styles.button}>
                <Button title="Locate Me" onPress={() => null}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    placeHolder: {
        width: '80%',
        height: 200,
        backgroundColor: '#eee',
        borderWidth: 1,
        borderColor: 'black'
    },
    button: {
        margin: 5
    }
});

export default PickPlace;