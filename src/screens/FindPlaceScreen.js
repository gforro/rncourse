import React from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from "react-native";
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
    const [placesLoaded, setPlacesLoaded] = React.useState(false);
    const [removeAnimation, setRemoveAnimation] = React.useState(new Animated.Value(1));
    useSideDrawer(navigator);

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

    const placesLoadedHandler = () => {
        setPlacesLoaded(true);
        Animated.timing(removeAnimation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    };

    const handleSearchClicked = () => {
        Animated.timing(removeAnimation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start(placesLoadedHandler);
    };


    let content = null;
    if (placesLoaded) {
        content = (
            <Animated.View style={{
                opacity: removeAnimation,
                transform: [
                    { scale: removeAnimation.interpolate({

                            inputRange: [0, 1],
                            outputRange: [2, 1]
                        })
                    }
                ]
            }}>
                <PlaceList places={places} onItemSelected={handlePlaceSelected}/>
            </Animated.View>
        );
    } else {
        content = (
            <Animated.View style={{
                opacity: removeAnimation,
                transform: [
                    { scale: removeAnimation.interpolate({

                            inputRange: [0, 1],
                            outputRange: [12, 1]
                            })
                    }
                ]
            }}>
                <TouchableOpacity onPress={handleSearchClicked}>
                    <View style={styles.searchButton}>
                        <Text style={styles.searchText}>Load Places</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );
    }

    return (
        <View style={placesLoaded ? null : styles.container}>{content}</View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchButton: {
        borderColor: 'orange',
        borderWidth: 5,
        borderRadius: 50
    },
    searchText: {
        color: 'orange',
        fontSize: 28,
        padding: 20
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FindPlaceScreen);