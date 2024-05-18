import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

const BookMark = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>BookMark</Text>
    </View>
  );
}
export default BookMark

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'pink',
    fontSize: 36, // Adjust font size as needed
    fontWeight: 'bold',
  },
});
