import React from "react";
import { View, Text, Button } from "react-native";
import Background from "../../background/Background";

export default function ({ navigation }) {
  return (
    <Background style={{ alignItems: "center", justifyContent: "center" }}>
      <Text>Cringe</Text>
      <Button title="back" onPress={() => navigation.goBack()} />
    </Background>
  );
}