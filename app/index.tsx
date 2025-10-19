import { Pressable, Text, View } from "react-native";
import { useAudioPlayer } from "expo-audio";

const vineBoomAudio = require("./assets/boom.mp3");
const taskmasterThemeAudio = require("./assets/tm_theme.mp3");

export default function Index() {
  const vineBoomPlayer = useAudioPlayer(vineBoomAudio);
  function vineBoom() {
    vineBoomPlayer.seekTo(0);
    vineBoomPlayer.play();
  }

  const taskmasterThemePlayer = useAudioPlayer(taskmasterThemeAudio);
  function taskmasterTheme() {
    taskmasterThemePlayer.seekTo(0);
    taskmasterThemePlayer.play();
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable onPress={vineBoom}>
        <Text>Vine Boom</Text>
      </Pressable>
      <Pressable onPress={taskmasterTheme}>
        <Text>Taskmaster Theme</Text>
      </Pressable>
    </View>
  );
}
