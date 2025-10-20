import { Pressable, Text, View } from "react-native";
import { AudioPlayer, useAudioPlayer } from "expo-audio";

const sounds = {
  vineBoom: require("./assets/boom.mp3"),
  taskmasterTheme: require("./assets/tm_theme.mp3"),
};

export default function Index() {
  const vineBoomPlayer = useAudioPlayer(sounds.vineBoom);
  const taskmasterThemePlayer = useAudioPlayer(sounds.taskmasterTheme);

  const players: Record<string, AudioPlayer> = {
    vineBoom: vineBoomPlayer,
    taskmasterTheme: taskmasterThemePlayer,
  };

  function playSound(sound: string) {
    const player = players[sound];
    if (!player) {
      console.error(`ERR: Player for "${sound}" not found.`);
      return;
    }
    player.seekTo(0);
    player.play();
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable onPress={() => playSound("vineBoom")}>
        <Text>Vine Boom</Text>
      </Pressable>
      <Pressable onPress={() => playSound("taskmasterTheme")}>
        <Text>Taskmaster Theme</Text>
      </Pressable>
    </View>
  );
}
