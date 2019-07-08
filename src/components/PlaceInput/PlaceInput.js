import React from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";

const PlaceInput = ({onPlaceChanged, onPlaceAdded, place}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput value={place} onChangeText={onPlaceChanged} placeholder="A nice place" style={styles.placeInput} />
            <Button title="Add" onPress={onPlaceAdded} style={styles.placeButton} />
        </View>
    );
};

export default PlaceInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width: '30%'
    }
});