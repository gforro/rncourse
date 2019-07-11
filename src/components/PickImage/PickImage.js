import React from 'react';
import {Button, Image, StyleSheet, View} from "react-native";
import imagePlaceHolder from "../../assets/beach.jpg";

const PickImage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.placeHolder}>
                <Image source={imagePlaceHolder} style={styles.imagePlaceHolder}/>
            </View>
            <View style={styles.button}>
                <Button title="Pick Image" onPress={() => null}/>
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
    imagePlaceHolder: {
        width: '100%',
        height: '100%'
    },
    button: {
        margin: 5
    }
});

export default PickImage;