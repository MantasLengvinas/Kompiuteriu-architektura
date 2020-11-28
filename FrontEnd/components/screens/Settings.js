import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Background from "../background/Background";
import StyledButton from "../buttons/StyledButton";

import MyHeader from "../header/MyHeader";
import TextStyles  from "../styles/Text";

export default function ({ navigation }) {
  return (
    <Background>
      <MyHeader navigation={navigation} goBack={true}/>
      <View style={{flex:1, alignItems: "center", justifyContent: "center" }}>
        <Text style={TextStyles.general}>Nustatymai</Text>
        <View style={styles.bottomContainer}>
          <View style={{ marginBottom: 40 }}>
            <StyledButton>Atsijungti</StyledButton>
          </View>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});