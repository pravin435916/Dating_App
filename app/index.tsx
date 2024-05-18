import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router'; 
const couple = require('../constants/icons/couple.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={couple} style={styles.image} resizeMode='contain' />
      <View style={styles.whiteBox}>
        <Text style={styles.text}>Find Your Partner With Us!</Text>
        <Text style={styles.text2}> Lorem ipsum dolor sit amet consectetur adipisicing elit. hello hi</Text>
        <Link href='/signup' style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position:'absolute',
    top:-30,
    width: '80%', // Adjust width as needed
    marginBottom: 20,
  },
  whiteBox: {
    flex: 1,
    gap:10,
    width:'90%',
    position:'absolute',
    bottom:40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal:5,
    paddingVertical: 20,
    borderRadius: 20, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 36,
    fontWeight:'700',
    textAlign: 'center',
    marginBottom: 5,
  },
  text2: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#E03368',
    paddingHorizontal: 85,
    paddingVertical:10,
    borderRadius: 10, // Match whiteBox borderRadius
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
