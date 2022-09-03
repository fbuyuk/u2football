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
                navigation.navigate("OyuncuDetay", { playerId: player?.id })
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
