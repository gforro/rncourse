import React from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";

const PlaceInput = ({onPlaceAdded}) => {
    const [place, setPlace] = React.useState('');
    const placeChangedHandler = (value) => setPlace(value);

    const placeAddedHandler = () => {
        if (place && place.trim()) {
            onPlaceAdded(place);
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput value={place} onChangeText={placeChangedHandler} placeholder="A nice place" style={styles.placeInput} />
            <Button title="Add" onPress={placeAddedHandler} style={styles.placeButton} />
        </View>
    );
};

export default PlaceInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width: '30%'
    }
});