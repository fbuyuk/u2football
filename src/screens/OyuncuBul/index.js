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
import axios from "axios";
import { apiUrl, useAuth } from "../../contexts/AuthContext";

export default function OyuncuBul({ navigation }) {
  const { token, tdp, bank } = useAuth();
  const [pozisyon, setPozisyon] = useState(null);
  const [profesyonellik, setProfesyonellik] = useState(null);
  const [player, setPlayer] = useState(null);
  const [costMoney, setCostMoney] = useState(0);
  const [costTDP, setCostTDP] = useState(0);

  const oyuncuArastir = () => {
    console.log(pozisyon, profesyonellik);
    if (pozisyon && profesyonellik) {
      axios
        .get(apiUrl + "/new_player", {
          params: {
            token: token,
            pozisyon: pozisyon,
            profesyonellik: profesyonellik,
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
    } else {
      alert("Lütfen tüm alanları doldurunuz ve tekrar deneyiniz!");
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#28616b" }}>
      <View style={styles.container}>
        <Text style={{ color: "white", marginBottom: 10 }}>
          Merhaba Menajer, oyuncu arama platformuna hoş geldiniz! Burada hiçbir
          takımla bağlantısı olmayan oyuncuları bulabilirsiniz.
        </Text>
        <View
          style={{
            borderColor: "white",
            borderWidth: 1,
            marginBottom: 10,
            padding: 4,
          }}
        >
          <Text style={{ color: "white" }}>
            Profesyonel mi arıyorsunuz? Profesyonel oyuncuları bulmak her zaman
            kolay değildir ve onlar genellikle kariyerlerinin zirvesinde olan
            oyuculardır. Ama kısa vadede iyi bir oyuncu arıyorsanız bu seçim
            size göredir.
          </Text>
        </View>
        <View
          style={{
            borderColor: "white",
            borderWidth: 1,
            marginBottom: 10,
            padding: 4,
          }}
        >
          <Text style={{ color: "white" }}>
            Genç Yetenek bulmak gayet zordur. Şu an için normal oynarlar ama
            uzun vadede birer yıldız olabilirler.
          </Text>
        </View>
        <Dropdown
          placeholder={"Profesyonellik seçin"}
          label={"İstenilen Profesonellik"}
          data={[
            { label: "Genç Yetenek(20)", value: "1" },
            { label: "Amatör(10)", value: "2" },
            { label: "Profesyonel(16)", value: "3" },
          ]}
          onChange={(item) => {
            if (item.value == 1) {
              setCostMoney(60000);
              setCostTDP(20);
            } else if (item.value == 2) {
              setCostMoney(1000);
              setCostTDP(10);
            } else {
              setCostMoney(100000);
              setCostTDP(16);
            }
            setProfesyonellik(item.value);
          }}
        />
        <Dropdown
          label={"Pozisyon"}
          placeholder={"Pozisyon seçin"}
          data={[
            { label: "Hucum", value: "1" },
            { label: "Orta Saha", value: "2" },
            { label: "Defans", value: "3" },
            { label: "Kaleci", value: "4" },
          ]}
          onChange={(item) => {
            console.log(item);
            setPozisyon(item.label);
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome name="money" size={24} color="white" />
            <Text style={{ color: "white", marginLeft: 10 }}>{costMoney}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome name="user-o" size={24} color="white" />
            <Text style={{ color: "white", marginLeft: 10 }}>{costTDP}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            oyuncuArastir();
          }}
        >
          <Text style={styles.menuButtonTitle}>Oyuncu Bul</Text>
        </TouchableOpacity>
        {player ? (
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              borderRadius: 12,
              paddingVertical: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 26,
            }}
            onPress={() =>
              navigation.navigate("OyuncuDetay", { playerId: player?.id })
            }
          >
            <Text style={{ color: "white" }}>
              Takımınızın yeni oyuncusu sizden merhaba bekliyor!
            </Text>
            <Text
              style={{
                color: "red",
                fontSize: 32,
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              {player?.full_name}
            </Text>
          </TouchableOpacity>
        ) : (
          <Text></Text>
        )}
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
  },
  headTitle: {
    color: "white",
    fontWeight: "bold",
  },
  menuButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 2,
    borderRadius: 6,
    backgroundColor: "white",
    height: 50,
    marginTop: 10,
  },
  menuButtonTitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#003740",
    marginTop: 8,
  },
});
