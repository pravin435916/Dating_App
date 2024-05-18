import { StyleSheet, View, Text,Image } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
const Home = () => {
  const avatar = require('../../constants/icons/pravin.jpeg')
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={avatar} style={styles.avatar}/>
        <Text style={{color:'#E03368' , fontSize:24}}>Likee</Text>
        <Text style={styles.avatar}><Ionicons name="notifications-outline" size={36} color="black" /></Text>
      </View>
      <Text style={{fontWeight:'800', fontSize:24}}>Find Your Love</Text>
      <View className="w-[90%] h-[70%] bg-pink-700 shadow-2xl mt-10 rounded-2xl">
         <Image className="w-full h-full rounded-2xl" source={avatar} />
      </View>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    padding:6
  },
  header: {
    display: "flex",
    width: "95%",
    marginTop:5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar:{
       width:42,
       height:42,
       borderRadius:50
  },
  text: {
    color: "pink",
    fontSize: 36,
    fontWeight: "bold",
  },
});
