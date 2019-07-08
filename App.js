/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import ListItem from './src/components/ListItem/ListItem';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const App = () => {
  const [place, setPlace] = React.useState('');
  const [places, setPlaces] = React.useState(['1st place', '2nd place']);

  const placeChangedHandler = (value) => setPlace(value);
  const placeAddedHandler = () => {
    if (place && place.trim()) {
      setPlaces(prevPlaces => prevPlaces.concat(place.trim()));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value={place} onChangeText={placeChangedHandler} placeholder="A nice place" style={styles.placeInput} />
        <Button title="Add" onPress={placeAddedHandler} style={styles.placeButton} />
      </View>
      <View style={styles.items}>
        {places.map((p, i) => <ListItem place={p} key={i} />)}
      </View>
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
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  items: {
    width: '95%'
  }
});
