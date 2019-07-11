import React from 'react';
import {Text, View} from "react-native";
import PlaceList from "../components/PlaceList/PlaceList";
import {connect} from "react-redux";
import useSideDrawer from "../components/hooks/useSideDrawer";
import {deletePlace} from "../store/actions";

const mapStateToProps = state => ({
    places: state.places.places
});

const mapDispatchToProps = dispatch => ({
    deletePlace: (key) => dispatch(deletePlace(key))
})

const FindPlaceScreen = ({places, navigator, deletePlace}) => {

    const handlePlaceSelected = (key) => {
        const thePlace = places.find(place => key === place.key);
        navigator.push({
           screen: 'sk.akitech.PlaceDetailScreen',
           title: thePlace.name,
           passProps: {
               place: thePlace,
               onPlaceDeleted: () => {
                   deletePlace(thePlace.key);
                   navigator.pop();
               }
           }
        });
    };

    useSideDrawer(navigator);

    return (
        <PlaceList places={places} onItemSelected={handlePlaceSelected}/>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(FindPlaceScreen);