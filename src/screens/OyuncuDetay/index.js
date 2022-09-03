import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useAuth, apiUrl } from "../../contexts/AuthContext";
import axios from "axios";

import { useState, useEffect } from "react";

export default function OyuncuBul({ navigation, route }) {
  const { token, tdp, bank } = useAuth();
  const [player, setPlayer] = useState(null);
  const { playerId } = route.params;

  useEffect(() => {
    axios
      .get(apiUrl + "/player", {
        params: {
          token: token,
          playerId: playerId,
        },
      })
      .then(async ({ data }) => {
        if (data.status) {
          console.log(data.player);
          setPlayer(data.player);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function takimdanGonder() {
    axios
      .delete(apiUrl + "/players", {
        params: {
          token: token,
          playerId: playerId,
        },
      })
      .then(async ({ data }) => {
        if (data.status) {
          navigation.navigate("Root");
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#28616b" }}>
      <View style={styles.container}>
        <View style={[styles.card, { paddingHorizontal: 10 }]}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 26,
              }}
            >
              {player?.full_name}
            </Text>
            <Text style={{ color: "darkred", fontWeight: "900", fontSize: 60 }}>
              {player?.yas}
            </Text>
          </View>
          <View>
            <Image
              resizeMode={"contain"}
              style={{ width: 100, height: 200 }}
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
        <TouchableOpacity
          style={[styles.card, { backgroundColor: "red" }]}
          onPress={() => {
            takimdanGonder();
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>
            Takımdan Gönder
          </Text>
        </TouchableOpacity>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Goller: </Text>
          <Text>{player?.goller}</Text>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Kartlar: </Text>
          <View style={{ flexDirection: "row" }}>
            <Text>{player?.sari_kart}x</Text>
            <Text
              style={{
                backgroundColor: "yellow",
                paddingHorizontal: 6,
                color: "white",
                marginHorizontal: 4,
              }}
            ></Text>
            <Text>{player?.kirmizi_kart}x</Text>
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
            <Text>{player?.H}</Text>
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
            <Text>{player?.O}</Text>
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
            <Text>{player?.D}</Text>
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
            <Text>{player?.K}</Text>
          </View>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Pozisyon: </Text>
          <Text>{player?.pozisyon}</Text>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Koşu: </Text>
          <Text>{player?.kosu}</Text>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Refleksler: </Text>
          <Text>{player?.refleksler}</Text>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Top Kontrolü: </Text>
          <Text>{player?.top_kontrolu}</Text>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Gol Yollarında Etkinlik: </Text>
          <Text>{player?.gol_yollarinda_etkinlik}</Text>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>İkili Mücadele: </Text>
          <Text>{player?.ikili_mucadele}</Text>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Kondisyon: </Text>
          <Text>{player?.kondisyon}</Text>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Güncel Durum: </Text>
          <Text>{player?.durum}</Text>
        </View>
        <View style={[styles.card, styles.ability]}>
          <Text style={{ fontWeight: "bold" }}>Antrenman Puanı: </Text>
          <Text>{player?.antrenman_puani}</Text>
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
