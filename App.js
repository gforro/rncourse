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
import PlaceList from "./src/components/PlaceList/PlaceList";

const App = () => {
  const [places, setPlaces] = React.useState([]);

  const placeAddedHandler = (place) => setPlaces(prevPlaces => prevPlaces.concat(place.trim()));

  return (
    <View style={styles.container}>
      <PlaceInput onPlaceAdded={placeAddedHandler} />
      <PlaceList places={places} />
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
    padding: 5
  }
});
