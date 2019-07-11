import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import useViewMode from "../components/hooks/useViewMode";

const PlaceDetailScreen = ({place, onPlaceDeleted}) => {
    const viewMode = useViewMode();
    const styles = viewMode === 'portrait' ? portraitStyles : landscapeStyles;
    return (
        <View style={styles.rootContainer}>
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

const portraitStyles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'column',
        margin: 5
    },
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
});

const landscapeStyles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    placeImage: {
        width: '100%',
        height: "90%"
    },
    place: {
        alignItems: "flex-start",
        width: "80%",
    },
    placeName: {
        fontWeight: 'bold',
        fontSize: 16,
        margin: 5
    },
    deleteIcon: {
        alignItems: 'center'
    }
})