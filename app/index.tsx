import { Pressable, Text, View, StyleSheet } from "react-native";
import { AudioPlayer, useAudioPlayer } from "expo-audio";

const sounds = {
  vineBoom: require("./assets/boom.mp3"),
  taskmasterTheme: require("./assets/tm_theme.mp3"),
  foxIntro: require("./assets/foxTheme.mp3"),
  shaw: require("./assets/shaw.mp3"),
};

export default function Index() {
  const vineBoomPlayer = useAudioPlayer(sounds.vineBoom);
  const taskmasterThemePlayer = useAudioPlayer(sounds.taskmasterTheme);
  const foxIntroPlayer = useAudioPlayer(sounds.foxIntro);
  const shawPlayer = useAudioPlayer(sounds.shaw);

  const players: Record<string, AudioPlayer> = {
    vineBoom: vineBoomPlayer,
    taskmasterTheme: taskmasterThemePlayer,
    foxIntro: foxIntroPlayer,
    shaw: shawPlayer,
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
    <View style={styles.container}>
      <Pressable
        style={styles.soundButton}
        onPress={() => playSound("vineBoom")}
      >
        <Text style={styles.soundText}>Vine Boom</Text>
      </Pressable>
      <Pressable
        style={styles.soundButton}
        onPress={() => playSound("taskmasterTheme")}
      >
        <Text style={styles.soundText}>Taskmaster Theme</Text>
      </Pressable>
      <Pressable
        style={styles.soundButton}
        onPress={() => playSound("foxIntro")}
      >
        <Text style={styles.soundText}>Fox Intro</Text>
      </Pressable>
      <Pressable
        style={styles.soundButton}
        onPress={() => playSound("shaw")}
      >
        <Text style={styles.soundText}>Shaw!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    backgroundColor: "#1e1e2e",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  soundButton: {
    margin: 20,
    padding: 30,
    backgroundColor: "#45475a",
    borderRadius: 15,
    width: 160,
    height: 100,
    justifyContent: "center",
  },
  soundText: {
    color: "#cdd6f4",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
