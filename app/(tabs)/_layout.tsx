import { View, Text } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
// import like from "../../constants/icons/like.png";
import { AntDesign, FontAwesome, MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons";
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
        //   tabBarShowLabel: false,
          tabBarActiveTintColor: "#E03368",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#1E1E2D",
            padding:8,
            height:65,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <AntDesign name="home" size={32} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="BookMark"
          options={{
            title: "BookMark",
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <FontAwesome name="heart" size={32} color={color} />
            ),
          }}
        />
          <Tabs.Screen
            name="Create"
            options={{
              title: "Create",
              headerShown: false,
              tabBarIcon: ({ color }) => (
                  <AntDesign name="message1"  size={32} color={color} />
              ),
            }}
          />
        <Tabs.Screen
          name="profile"
          options={{
            title: "profile",
            headerShown: false,
            tabBarIcon: ({ color }) => (
                <AntDesign name="user" size={32} color={color} />
                
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
