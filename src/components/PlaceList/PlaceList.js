import React from 'react';
import ListItem from "../ListItem/ListItem";
import {FlatList, StyleSheet} from "react-native";

const PlaceList = ({places, onItemSelected}) => {
    return (
        <FlatList
            style={styles.items}
            data={places}
            renderItem={({item}) =>
                <ListItem place={item} onItemSelected={() => onItemSelected(item.key)} />
            }>
        </FlatList>
    );
};

export default PlaceList;

const styles = StyleSheet.create({
    items: {
        width: '100%'
    }
});