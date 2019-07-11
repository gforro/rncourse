import React from 'react';
import {TextInput} from "react-native";
import DefaultInput from "../UI/DefaultInput";

const PlaceInput = ({ placeName, onPlaceNameChanged, ...props}) => (
    <DefaultInput {...props} placeholder='Place Name' value={placeName} onChangeText={(value) => onPlaceNameChanged(value)} />
);

export default PlaceInput;
