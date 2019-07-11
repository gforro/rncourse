import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const PlaceDetailScreen = ({place, onPlaceDeleted}) => {
    return (
        <View style={{margin: 5}}>
            {place &&
            <View style={styles.place}>
                <Image source={place.image} style={styles.placeImage}/>
                <Text style={styles.placeName}>{place.name}</Text>
            </View>
            }
            <View>
                <TouchableOpacity onPress={onPlaceDeleted}>
                    <View style={styles.deleteIcon}>
                        <Icon size={30} name="md-trash" color="red" />
                    </View>
                </TouchableOpacity>
              </View>
        </View>
    );
};

export default PlaceDetailScreen;

const styles = StyleSheet.create({
    placeImage: {
        width: "100%",
        height: 200
    },
    place: {
        alignItems: "center"
    },
    placeName: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10
    },
    deleteIcon: {
        alignItems: 'center'
    }
})