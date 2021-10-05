import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { color } from "../Data/colors";
import { size } from "../Data/size";

import { FontAwesome } from "@expo/vector-icons";

export const SearchBar = ({
   text,
   setFilterWords,
   onChangeText,
   masterWords,
}) => {
   const textChangeHandel = (text) => {
      if (text) {
         const newData = masterWords.filter((item) => {
            const itemData = item.name
               ? item.name.toUpperCase()
               : "".toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
         });
         setFilterWords(newData);
         onChangeText(text);
      } else {
         setFilterWords(masterWords);
         onChangeText(text);
      }
   };

   return (
      <View style={styles.topContainer}>
         <TextInput
            style={styles.input}
            onChangeText={(text) => textChangeHandel(text)}
            value={text}
            placeholder="Search Word"
         />
         <FontAwesome name="search" size={24} color={color.gray} />
      </View>
   );
};

const styles = StyleSheet.create({
   topContainer: {
      backgroundColor: color.lightPink,
      width: "70%",
      borderRadius: size.sm,
      marginBottom: size.sm,
      alignItems: "center",
      flexDirection: "row",
      alignSelf: "center",
   },
   input: {
      width: "85%",
      height: size.xxl,
      paddingLeft: size.md,
   },
});
