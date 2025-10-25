import { Pressable, Text, View, StyleSheet } from "react-native";
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
    width: 150,
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
