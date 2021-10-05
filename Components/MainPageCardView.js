import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { PlaySound } from "./PlaySound";
import base64 from "react-native-base64";
import { size } from "../Data/size";
import { color } from "../Data/colors";
import { AntDesign } from "@expo/vector-icons";

export const MainPageCardView = ({
   word,
   meaning,
   setModalVisible,
   setDetails,
   id,
}) => {
   let URI = `https://voice.reverso.net/RestPronunciation.svc/v1/output=json/GetVoiceStream/voiceName=Klaus22k?inputText=${base64.encode(
      word
   )}`;

   return (
      <View style={styles.container}>
         <View style={styles.cardView}>
            <View style={styles.mainText}>
               <Text style={styles.meaning}>{meaning}</Text>
            </View>
            <View style={styles.textContainer}>
               <TouchableOpacity
                  onPress={() => {
                     setModalVisible(true);
                     setDetails(id);
                  }}
                  activeOpacity={0.8}
               >
                  <Text style={styles.text}>{word}</Text>
               </TouchableOpacity>

               <PlaySound
                  URI={URI}
                  child={<AntDesign name="sound" size={20} color={"#fff"} />}
               />
            </View>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      margin: size.md,
   },
   cardView: {
      backgroundColor: color.mainColor,
      width: size.cardWidth,
      height: size.cardHeight,
      borderRadius: size.md,
   },
   mainText: {
      alignSelf: "flex-end",
      marginRight: size.md,
      marginTop: size.md,
   },
   meaning: {
      color: color.secondColor,
      fontWeight: "bold",
      fontSize: size.lg,
   },
   textContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: size.sm,
      alignItems: "center",
   },
   text: {
      color: color.secondColor,
      fontWeight: "bold",
      fontSize: size.md,
   },
});
