/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import List from "./src/components/List/List";

const App = () => {
  const [place, setPlace] = React.useState('');
  const [places, setPlaces] = React.useState([]);

  const placeChangedHandler = (value) => setPlace(value);
  const placeAddedHandler = () => {
    if (place && place.trim()) {
      setPlaces(prevPlaces => prevPlaces.concat(place.trim()));
    }
  };

  return (
    <View style={styles.container}>
      <PlaceInput onPlaceAdded={placeAddedHandler} onPlaceChanged={placeChangedHandler} place={place} />
      <List places={places} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
  }
});
