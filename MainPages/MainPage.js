import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { WordList } from "../Data/WordList";
import { SearchBar } from "../Components/SearchBar";
import { size } from "../Data/size";
import { Dimensions } from "react-native";

import { MainPageCardView } from "../Components/MainPageCardView";
import { ModalPage } from "../Components/ModalPage";

export const MainPage = () => {
   const [text, onChangeText] = useState(null);
   const [fillteWords, setFilterWords] = useState(WordList);
   const [modalVisible, setModalVisible] = useState(false);
   const [details, setDetails] = useState("0");

   return (
      <View style={styles.container}>
         <SearchBar
            masterWords={WordList}
            text={text}
            onChangeText={onChangeText}
            setFilterWords={setFilterWords}
         />

         <ModalPage
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
            details={details}
            setDetails={setDetails}
         />

         <FlatList
            data={fillteWords}
            renderItem={({ item }) => (
               <MainPageCardView
                  id={item.id}
                  word={item.name}
                  meaning={item.meaning}
                  setModalVisible={setModalVisible}
                  setDetails={setDetails}
               />
            )}
            numColumns={2}
            contentContainerStyle={{ alignItems: "center" }}
            style={styles.flatList}
         />
      </View>
   );
};

const screenHeight = Dimensions.get("screen").height;
const windowHeight = Dimensions.get("window").height;
const navbarHeight = screenHeight - windowHeight;

const styles = StyleSheet.create({
   container: {
      marginTop: size.lg,
   },
   flatList: { marginTop: size.lg, marginBottom: navbarHeight },
});
