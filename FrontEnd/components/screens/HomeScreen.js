import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";

import Background from "../background/Background";
import StyledButton from "../buttons/StyledButton";
import MyHeader from "../header/MyHeader";
import TextStyles from "../styles/Text";
import LoginButton from "../buttons/LoginButton";
import Icon from "../images/Icon";
import LoginButtonTop from "../buttons/LoginButtonTop";
export default function ({ navigation }) {
  return (
    <Background >
      {/* <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <LoginButtonTop onPress={() => navigation.navigate("Login")} style={{ marginTop: 5 }}>
          PRISIJUNGTI
        </LoginButtonTop>
      </View> */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 40 }}>
        <Text style={TextStyles.general}>Kur keliausite šiandien?</Text>
        <View style={styles.bottomContainer}>
          <Icon />
          <View style={{ marginBottom: 15 }}>
            <StyledButton onPress={() => navigation.navigate("Login")}>Prisijungti</StyledButton>
          </View>
          <View style={{ marginBottom: 40 }}>
            <StyledButton onPress={() => navigation.navigate("Register")}>Registruotis</StyledButton>
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
    alignItems: "center",
  },
});
