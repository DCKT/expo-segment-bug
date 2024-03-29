import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Segment from "expo-analytics-segment";

Segment.initialize({
  androidWriteKey: "eNjTIoCZWX2d4wqnqawVKPnauT3aI7NN",
  iosWriteKey: "eNjTIoCZWX2d4wqnqawVKPnauT3aI7NN",
});

export default function App() {
  React.useEffect(() => {
    Segment.track("test");
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
