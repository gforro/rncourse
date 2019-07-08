import React from 'react';
import ListItem from "../ListItem/ListItem";
import {StyleSheet, View} from "react-native";

const PlaceList = ({places}) => {
    return (
        <View style={styles.items}>
            {places.map((place, i) => <ListItem place={place} key={i} />)}
        </View>
    );
};

export default PlaceList;

const styles = StyleSheet.create({
    items: {
        width: '100%'
    }
});