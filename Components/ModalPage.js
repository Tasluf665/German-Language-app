import React from "react";
import {
   Text,
   View,
   StyleSheet,
   Modal,
   Button,
   ScrollView,
} from "react-native";
import { color } from "../Data/colors";
import { size } from "../Data/size";
import base64 from "react-native-base64";
import { AntDesign } from "@expo/vector-icons";

import { WordList } from "../Data/WordList";
import { DetailsWord } from "../Data/DetailsWord";
import { CardView } from "./CardView";
import { PlaySound } from "./PlaySound";

export const ModalPage = ({ modalVisible, setModalVisible, details = "0" }) => {
   const mainWord = WordList.filter((item) => item.id === details);
   const detailWord = DetailsWord.filter((item) => item.id === details);

   let encoded = mainWord[0] ? base64.encode(mainWord[0].name) : "";
   let URI = `https://voice.reverso.net/RestPronunciation.svc/v1/output=json/GetVoiceStream/voiceName=Klaus22k?inputText=${encoded}`;

   return (
      <Modal visible={modalVisible} animationType="slide">
         <ScrollView>
            <View style={styles.container}>
               <View style={styles.topText}>
                  <Text style={styles.mainWord}>
                     {mainWord[0] ? mainWord[0].name : null}
                  </Text>
                  <PlaySound
                     URI={URI}
                     child={
                        <AntDesign
                           name="sound"
                           size={24}
                           color={color.mainColor}
                        />
                     }
                  />
               </View>
               <Text style={styles.EnglishWord}>
                  English:{" "}
                  {detailWord[0] ? detailWord[0].Details_Meaning : null}
               </Text>

               <View style={styles.CardView}>
                  <CardView
                     item={detailWord[0] ? detailWord[0].Präsens : []}
                     name="Präsens"
                     cardColor={color.darkViloat}
                  />
                  <CardView
                     item={detailWord[0] ? detailWord[0].Präteritum : []}
                     name="Präteritum"
                     cardColor={color.lightBlue}
                  />
                  <CardView
                     item={detailWord[0] ? detailWord[0].Futur_I : []}
                     name="Futur I"
                     cardColor={color.red}
                  />
               </View>
               <View style={styles.button}>
                  <Button
                     title="Close"
                     color={color.mainColor}
                     onPress={() => setModalVisible(false)}
                  />
               </View>
            </View>
         </ScrollView>
      </Modal>
   );
};

const styles = StyleSheet.create({
   container: {
      paddingTop: size.xl,
      paddingHorizontal: size.xl,
   },
   topText: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
   },
   mainWord: {
      fontSize: size.lg,
      color: color.mainColor,
      fontWeight: "bold",
   },
   EnglishWord: {
      fontSize: size.md,
      marginTop: size.sm,
   },
   CardView: {
      marginTop: size.md,
      alignItems: "center",
   },
   button: {
      width: "40%",
      alignSelf: "center",
      marginTop: size.md,
   },
});
