﻿import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Background from "../background/Background";
import TextStyles from "../styles/Text";
import InputStyles from "../styles/Input";
import BackHeader from "../header/BackHeader";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import StyledButton from "../buttons/StyledButton";
import Icon from "../images/Icon";

export default function ({ navigation }) {

  let [email, setEmail] = useState("");

  let resetPassword = () => {
    fetch("http://orutis.live/forgotPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          if(!data.error){
            console.log(data);
            navigation.navigate("ConfirmationPassword")
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Background>
      <BackHeader navigation={navigation} goBack={true} />
      <Text style={[TextStyles.general, { marginTop: 40 }]}>Pamiršai slaptažodį?</Text>
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 60 }}>
        <TextInput placeholder="El. Paštas" style={InputStyles.inputField} onChangeText={(text) => setEmail(text)} value={email}/>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
        <StyledButton onPress={() => resetPassword()} style={{ marginTop: 20 }}>
          Siųsti
        </StyledButton>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
        <Icon />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  privacy: {
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
    width: 225,
    marginTop: 20,
    fontSize: 17,
  },
});
