import { Image, Pressable, View, StyleSheet } from "react-native";
import { AudioPlayer, useAudioPlayer, setAudioModeAsync } from "expo-audio";
import { useEffect } from "react";

useEffect(() => {
  (async () => {
    await setAudioModeAsync({
      playsInSilentMode: true,
      shouldPlayInBackground: true,
      interruptionModeAndroid: "duckOthers",
      interruptionMode: "mixWithOthers",
    });
  })();
}, []);

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
        <Image
          source={require("./assets/rock.png")}
          style={styles.buttonImage}
        />
      </Pressable>
      <Pressable
        style={styles.soundButton}
        onPress={() => playSound("taskmasterTheme")}
      >
        <Image
          source={require("./assets/tm_logo.png")}
          style={styles.buttonImage}
        />
      </Pressable>
      <Pressable
        style={styles.soundButton}
        onPress={() => playSound("foxIntro")}
      >
        <Image
          source={require("./assets/fox.png")}
          style={styles.buttonImage}
        />
      </Pressable>
      <Pressable style={styles.soundButton} onPress={() => playSound("shaw")}>
        <Image
          source={require("./assets/hornet.png")}
          style={styles.buttonImage}
        />
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
    backgroundColor: "#45475a",
    borderRadius: 15,
    justifyContent: "center",
  },
  soundText: {
    color: "#cdd6f4",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonImage: {
    margin: 10,
    padding: 6,
    width: 100,
    height: 100,
  },
});
