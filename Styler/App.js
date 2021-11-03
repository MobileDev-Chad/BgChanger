import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: "column " }}>
      <View style={{ flex: 1, backgroundColor: "#2475B0" }}></View>
      <View style={{ flex: 2, backgroundColor: "#10A881" }}></View>
      <View style={{ flex: 3, backgroundColor: "#E74292" }}></View>
    </View>
  );
}
