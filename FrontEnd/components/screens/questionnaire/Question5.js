import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import Background from "../../background/Background";
import TextStyles from "../../styles/Text";
import InputStyles from "../../styles/Input";
import BackHeader from "../../header/BackHeader";

import { ScrollView, TextInput } from "react-native-gesture-handler";
import StyledButton from "../../buttons/QuestionButton5";
import Icon from "../../images/Icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ({ navigation }) {
  /////////////////////BACK-END/////////////////////////////////////////

  let [value, setValue] = useState("");

  let saveQuestion = async (val) => {
    let token = await AsyncStorage.getItem("token");
    setValue(val);
    fetch("http://orutis.live/quiz?q=5", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
      body: JSON.stringify({
        value: value,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        console.log(data);
        navigation.navigate("Confirmation");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /////////////////////BACK-END//////////////////////////////////////////
  return (
    <Background>
      <BackHeader navigation={navigation} goBack={true} />
      <Text style={[TextStyles.general, { marginTop: 40 }]}>Kokio tipo paslaugoms teikiate pirmenybę?</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View style={{  paddingTop: 100, paddingBottom: 20 }}>
          <StyledButton onPress={() => saveQuestion(false)}>
            <Text style={styles.general}> Mokamoms {"\n"}</Text>
            <MaterialCommunityIcons name="cash" size={40} color="black" />
          </StyledButton>
        </View>

        <View style={{ paddingTop: 100, paddingBottom: 20 }}>
          <StyledButton onPress={() => saveQuestion(true)}>
            <Text style={styles.general}> Nemokamoms {"\n"}</Text>
            <MaterialCommunityIcons name="cash-refund" size={40} color="black" />
          </StyledButton>
        </View>
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
    color: "black",
    textAlign: "center",
    width: 225,
    marginTop: 20,
    fontSize: 17,
  },
  general: {
    textAlign: "center",
    color: "#3A3434",
    fontWeight: "700",
    fontSize: 21,
  },
});
