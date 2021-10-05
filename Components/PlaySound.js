import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Audio } from "expo-av";

export const PlaySound = ({ URI, child }) => {
   const [sound, setSound] = React.useState();

   async function playSound() {
      const { sound } = await Audio.Sound.createAsync({
         uri: URI,
      });
      setSound(sound);

      await sound.playAsync();
   }

   React.useEffect(() => {
      return sound
         ? () => {
              sound.unloadAsync();
           }
         : undefined;
   }, [sound]);

   return <TouchableOpacity onPress={playSound}>{child}</TouchableOpacity>;
};
