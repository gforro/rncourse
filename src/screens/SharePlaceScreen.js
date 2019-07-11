import React from 'react';
import PlaceInput from "../components/PlaceInput/PlaceInput";
import {connect} from "react-redux";
import {addPlace} from "../store/actions";
import useSideDrawer from "./useSideDrawer";

const mapDispatchToProps = dispatch => ({
   addPlace: placeName => dispatch(addPlace(placeName))
});

const SharePlaceScreen = ({addPlace, navigator}) => {
    useSideDrawer(navigator);

    return (
        <PlaceInput onPlaceAdded={(placeName) => addPlace(placeName)} />
    );
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);