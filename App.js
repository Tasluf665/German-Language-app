import React from "react";
import { View, StyleSheet } from "react-native";
import { color } from "./Data/colors";
import { StatusBar } from "react-native";

import { MainPage } from "./MainPages/MainPage";
import { Demo } from "./Practice/Demo";

export default function App() {
   return (
      <View style={styles.contianer}>
         <MainPage />
      </View>
   );
}

const styles = StyleSheet.create({
   contianer: {
      backgroundColor: color.bg,
      flex: 1,
      marginTop: StatusBar.currentHeight,
   },
});
