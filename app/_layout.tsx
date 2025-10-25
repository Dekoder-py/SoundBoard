import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#1e1e2e" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Sound Board" }} />
    </Stack>
  );
}
