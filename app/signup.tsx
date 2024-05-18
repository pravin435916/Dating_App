import React from "react";
import { Link } from "expo-router";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const likee = require("../constants/icons/likee.png");
export default function Signup() {
  return (
    <View style={styles.container}>
      <Image source={likee} style={styles.logo} />
      <Text style={styles.header}>Sign Up to Continue</Text>

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
        <Link href="/home" style={styles.buttonText}>
          Sign Up
        </Link>
      </TouchableOpacity>
      <View style={styles.Term}>
        <Text style={{ marginHorizontal: 4 }}>Or sign up with</Text>
        <View style={styles.auth}>
          <View style={styles.authbox}>
            <AntDesign name="google" size={24} color="black" />
            <Text>Google</Text>
          </View>
          <View style={styles.authbox}>
            <Feather name="facebook" size={24} color="black" />
            <Text>Facebook</Text>
          </View>
        </View>
      </View>
      <View style={styles.Term}>
        <Text>I accept all the </Text>
        <Text style={styles.text2}>Terms & Conditions & Privacy Policy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    marginBottom: 24,
  },
  header: {
    fontSize: 32,
    marginBottom: 40,
    fontWeight: "800",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderColor: "#ff4500",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#E03368",
    paddingHorizontal: 85,
    paddingVertical: 10,
    borderRadius: 10, // Match whiteBox borderRadius
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  Term: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  text2: {
    color: "#E03368",
  },
  auth: {
    marginTop: 12,
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  authbox: {
    fontSize: 18,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    gap: 8,
    paddingHorizontal: 40,
  },
});
