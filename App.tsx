import "react-native-gesture-handler";

import { GLView } from "expo-gl";
import React from "react";
import { View } from "react-native";
import { runOnUI } from "react-native-reanimated";

function render(gl) {
  "worklet";
  // add your WebGL code here
}

function onContextCreate(gl) {
  runOnUI((contextId: number) => {
    "worklet";
    const gl = GLView.getWorkletContext(contextId);
    render(gl);
  })(gl.contextId);
}

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <GLView
        style={{ width: 300, height: 300 }}
        enableExperimentalWorkletSupport
        onContextCreate={onContextCreate}
      />
    </View>
  );
}
