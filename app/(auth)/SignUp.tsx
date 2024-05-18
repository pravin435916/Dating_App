import React from 'react';
import { Link } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>login Up</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Username" 
        placeholderTextColor="#aaa"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        placeholderTextColor="#aaa"
        keyboardType="email-address"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 32,
    marginBottom: 40,
    color: '#ff4500',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 25,
    borderColor: '#ff4500',
    borderWidth: 1,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#ff4500',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
