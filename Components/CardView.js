import React from "react";
import { View, StyleSheet, Text } from "react-native";
import base64 from "react-native-base64";

import { color } from "../Data/colors";
import { size } from "../Data/size";
import { PlaySound } from "./PlaySound";

export const CardView = ({ item, name, cardColor }) => {
   function URIGenarator(nameArray) {
      let name = nameArray.split(" ");
      name = name[name.length - 1];
      let URI = `https://voice.reverso.net/RestPronunciation.svc/v1/output=json/GetVoiceStream/voiceName=Klaus22k?inputText=${base64.encode(
         name
      )}`;

      return URI;
   }

   function textGenarator(i) {
      const textArray = [];
      let len = i + 3;
      for (i; i < len; i++) {
         textArray.push(
            <PlaySound
               key={item[i]}
               URI={URIGenarator(item[i])}
               child={<Text style={styles.left}>{item[i]}</Text>}
            />
         );
      }
      return textArray;
   }
   return (
      <View style={[styles.cardView, { backgroundColor: cardColor }]}>
         <Text style={styles.title}>{name}</Text>
         <View style={styles.allContainer}>
            <View style={styles.leftContainer}>
               {item.length > 5 ? textGenarator(0) : null}
            </View>
            <View style={styles.middle}>
               <View style={styles.line}></View>
               <View style={styles.circle}></View>
            </View>
            <View style={styles.leftContainer}>
               <View style={styles.leftContainer}>
                  {item.length > 5 ? textGenarator(3) : null}
               </View>
            </View>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   cardView: {
      width: "100%",
      height: "auto",
      borderRadius: size.md,
      marginVertical: size.fontmd,
   },
   title: {
      color: color.secondColor,
      fontSize: size.md,
      textAlign: "center",
      marginTop: size.sm,
   },
   left: {
      fontSize: size.fontmd,
      color: color.secondColor,
      marginVertical: size.sm,
   },
   line: {
      height: "90%",
      width: 3,
      backgroundColor: color.secondColor,
      marginVertical: size.sm,
      zIndex: 0,
      position: "absolute",
   },
   circle: {
      zIndex: 1,
      position: "absolute",
      backgroundColor: color.secondColor,
      height: size.md,
      width: size.md,
      borderRadius: 50,
      top: 50,
      left: -7,
   },

   allContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: size.fontmd,
      marginTop: size.md,
      marginBottom: size.md,
   },
});
