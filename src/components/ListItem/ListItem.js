import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ListItem = ({place}) => {
  return (
    <View style={styles.item}>
      <Text>{place}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  item: {
    width: '100%',
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 2
  }
})
