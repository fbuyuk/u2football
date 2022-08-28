import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { useAuth, apiUrl } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";

export default function Oyuncular({ navigation }) {
  const { token, tdp, bank } = useAuth();
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    axios
      .get(apiUrl + "/players", {
        params: {
          token: token,
        },
      })
      .then(async ({ data }) => {
        if (data.status) {
          setPlayers(data.players);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#28616b" }}>
      <View style={styles.container}>
        <Text
          style={{
            color: "white",
            borderBottomWidth: 1,
            marginBottom: 10,
            paddingBottom: 4,
            fontWeight: "bold",
            fontSize: 18,
            borderColor: "white",
          }}
        >
          Oyuncular
        </Text>
        {players.map((player, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate("OyuncuDetay", { playerId: index })
              }
              style={[styles.card, styles.ability]}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={[
                    {
                      backgroundColor: "red",
                      paddingHorizontal: 3,
                      color: "white",
                      marginHorizontal: 4,
                    },
                    player.pozisyon == "Hücum"
                      ? { backgroundColor: "red" }
                      : player.pozisyon == "Orta Saha"
                      ? { backgroundColor: "blue" }
                      : player.pozisyon == "Defans"
                      ? { backgroundColor: "green" }
                      : { backgroundColor: "yellow" },
                  ]}
                >
                  {player.pozisyon[0]}
                </Text>
                <Text>{player.full_name}</Text>
              </View>
              <Text>{player.yas}</Text>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          onPress={() => navigation.navigate("OyuncuDetay")}
          style={[styles.card, styles.ability]}
        >
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
            <Text>Cenk Tosun</Text>
          </View>
          <Text>48</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("OyuncuDetay")}
          style={[styles.card, styles.ability]}
        >
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
            <Text>Enes Ünal</Text>
          </View>
          <Text>48</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("OyuncuDetay")}
          style={[styles.card, styles.ability]}
        >
          <View style={{ flexDirection: "row" }}>
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
            <Text>Arda Güler</Text>
          </View>
          <Text>48</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("OyuncuDetay")}
          style={[styles.card, styles.ability]}
        >
          <View style={{ flexDirection: "row" }}>
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
            <Text>Ferdi Kadıoğlu</Text>
          </View>
          <Text>48</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("OyuncuDetay")}
          style={[styles.card, styles.ability]}
        >
          <View style={{ flexDirection: "row" }}>
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
            <Text>Kaan Ayhan</Text>
          </View>

          <Text>48</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("OyuncuDetay")}
          style={[styles.card, styles.ability]}
        >
          <View style={{ flexDirection: "row" }}>
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
            <Text>Cengiz Ünder</Text>
          </View>
          <Text>48</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("OyuncuDetay")}
          style={[styles.card, styles.ability]}
        >
          <View style={{ flexDirection: "row" }}>
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
            <Text>Merih Demiral</Text>
          </View>
          <Text>48</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("OyuncuDetay")}
          style={[styles.card, styles.ability]}
        >
          <View style={{ flexDirection: "row" }}>
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
            <Text>Çağlar Söyüncü</Text>
          </View>
          <Text>48</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("OyuncuDetay")}
          style={[styles.card, styles.ability]}
        >
          <View style={{ flexDirection: "row" }}>
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
            <Text>Kaan Ayhan</Text>
          </View>
          <Text>48</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("OyuncuDetay")}
          style={[styles.card, styles.ability]}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                backgroundColor: "yellow",
                paddingHorizontal: 3,
                color: "white",
                marginHorizontal: 4,
              }}
            >
              K
            </Text>
            <Text>Altay Bayındır</Text>
          </View>
          <Text>48</Text>
        </TouchableOpacity>
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
