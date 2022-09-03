import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Dropdown from "../../components/Dropdown";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import { useState } from "react";

export default function Taktik({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#28616b" }}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View>
            <Image
              resizeMode={"contain"}
              style={{ width: 80, height: 80 }}
              source={require("../../../assets/images/icons/logo.png")}
            />
          </View>
          <View>
            <Text style={styles.score}>1:0</Text>
          </View>
          <View>
            <Image
              resizeMode={"contain"}
              style={{ width: 80, height: 80 }}
              source={require("../../../assets/images/icons/hullcity.png")}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Image
              resizeMode={"contain"}
              style={{ width: 80, height: 80 }}
              source={require("../../../assets/images/icons/real_madrid.png")}
            />
          </View>
          <View>
            <Text style={styles.score}>1:0</Text>
          </View>
          <View>
            <Image
              resizeMode={"contain"}
              style={{ width: 80, height: 80 }}
              source={require("../../../assets/images/icons/logo.png")}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Image
              resizeMode={"contain"}
              style={{ width: 80, height: 80 }}
              source={require("../../../assets/images/icons/fener.png")}
            />
          </View>
          <View>
            <Text style={styles.score}>1:0</Text>
          </View>
          <View>
            <Image
              resizeMode={"contain"}
              style={{ width: 80, height: 80 }}
              source={require("../../../assets/images/icons/logo.png")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  score: {
    fontSize: 26,
    fontWeight: "bold",
  },
  headTitle: {
    color: "white",
    fontWeight: "bold",
  },
});
