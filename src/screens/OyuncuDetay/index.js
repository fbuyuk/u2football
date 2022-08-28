import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import { useState } from "react";

export default function OyuncuBul({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#28616b" }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 26 }}>Arda Güler</Text>
            <Text style={{ color: "darkred", fontWeight: "900", fontSize: 60 }}>
              26
            </Text>
          </View>
          <View>
            <Image
              resizeMode={"contain"}
              style={{ width: 160, height: 200 }}
              source={require("../../../assets/images/player1.png")}
            />
          </View>
        </View>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: "black" }]}
          onPress={() => {
            navigation.navigate("Antrenman", { playerId: 3 });
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>
            Bireysel Antrenman Yap
          </Text>
        </TouchableOpacity>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Goller: </Text>
          <Text>0</Text>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Kartlar: </Text>
          <View style={{ flexDirection: "row" }}>
            <Text>0x</Text>
            <Text
              style={{
                backgroundColor: "yellow",
                paddingHorizontal: 6,
                color: "white",
                marginHorizontal: 4,
              }}
            ></Text>
            <Text>0x</Text>
            <Text
              style={{
                backgroundColor: "red",
                paddingHorizontal: 6,
                color: "white",
                marginHorizontal: 4,
              }}
            ></Text>
          </View>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Maks. Güç: </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                backgroundColor: "red",
                paddingHorizontal: 3,
                color: "white",
                marginHorizontal: 4,
              }}
            >
              H
            </Text>
            <Text>47</Text>
            <Text
              style={{
                backgroundColor: "blue",
                paddingHorizontal: 3,
                color: "white",
                marginHorizontal: 4,
              }}
            >
              O
            </Text>
            <Text>59</Text>
            <Text
              style={{
                backgroundColor: "green",
                paddingHorizontal: 3,
                color: "white",
                marginHorizontal: 4,
              }}
            >
              D
            </Text>
            <Text>56</Text>
            <Text
              style={{
                backgroundColor: "orange",
                paddingHorizontal: 3,
                color: "white",
                marginHorizontal: 4,
              }}
            >
              K
            </Text>
            <Text>43</Text>
          </View>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Pozisyon: </Text>
          <Text>Orta Saha</Text>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Koşu: </Text>
          <Text>64</Text>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Refleksler: </Text>
          <Text>61</Text>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Top Kontrolü: </Text>
          <Text>76</Text>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Gol Yollarında Etkinlik: </Text>
          <Text>56</Text>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>İkili Mücadele: </Text>
          <Text>58</Text>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Kondisyon: </Text>
          <Text>54</Text>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Güncel Durum: </Text>
          <Text>Sağlıklı</Text>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Antrenman Puanı: </Text>
          <Text>54</Text>
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
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 26,
    borderWidth: 1,
    borderColor: "gray",
    elevation: 5,
    paddingVertical: 10,
    marginBottom: 10,
  },
  ability: {
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
});
