import React from 'react';
import PlaceInput from "../components/PlaceInput/PlaceInput";
import {connect} from "react-redux";
import {addPlace} from "../store/actions";
import useSideDrawer from "../components/hooks/useSideDrawer";
import {Button, ScrollView, StyleSheet, View} from "react-native";
import MainText from "../components/UI/MainText";
import HeadingText from "../components/UI/HeadingText";
import PickImage from "../components/PickImage/PickImage";
import PickPlace from "../components/PickPlace/PickPlace";

const mapDispatchToProps = dispatch => ({
    addPlace: placeName => dispatch(addPlace(placeName))
});

const SharePlaceScreen = ({addPlace, navigator}) => {
    const addPlaceHandler = () => {
        if (placeName && placeName.trim()) {
            addPlace(placeName);
        }
    };
    const [placeName, setPlaceName] = React.useState('');

    useSideDrawer(navigator);



    return (
        <ScrollView>
            <View style={styles.container}>
                <MainText>
                    <HeadingText>Share a Place with us</HeadingText>
                </MainText>
                <PickImage/>
                <PickPlace/>
                <PlaceInput placeName={placeName} onPlaceNameChanged={setPlaceName}/>
                <View style={styles.button}>
                    <Button title="Share this place" onPress={addPlaceHandler}/>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
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

export default connect(null, mapDispatchToProps)(SharePlaceScreen);