import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ListItem = ({place, onItemSelected}) => {
    return (
        <TouchableOpacity onPress={onItemSelected}>
            <View style={styles.item}>
                <Image source={place.image} style={styles.placeImage} />
                <Text>{place.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ListItem;

const styles = StyleSheet.create({
    item: {
        width: '100%',
        backgroundColor: '#eee',
        padding: 10,
        marginBottom: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeImage: {
        width: 30,
        height: 30,
        marginRight: 10
    }
})
