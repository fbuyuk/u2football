import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import StadView from "../../components/StadView";

export default function Anasayfa({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#28616b" }}>
      <StadView />
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.headTitle}>MENAJER</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.menuButton}>
            <AntDesign name="linechart" size={24} color="#003740" />
            <Text style={styles.menuButtonTitle}>TRANSFER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.navigate("OyuncuBul")}
          >
            <AntDesign name="staro" size={24} color="#003740" />
            <Text style={styles.menuButtonTitle}>OYUNCU BUL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.head}>
          <Text style={styles.headTitle}>TEKNİK DİREKTÖR</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.menuButton}>
            <AntDesign name="linechart" size={24} color="#003740" />
            <Text style={styles.menuButtonTitle}>TAKTİK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.navigate("Oyuncular")}
          >
            <AntDesign name="linechart" size={24} color="#003740" />
            <Text style={styles.menuButtonTitle}>TAKIM DETAY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.navigate("Antrenman", { playerId: null })}
          >
            <AntDesign name="linechart" size={24} color="#003740" />
            <Text style={styles.menuButtonTitle}>BİREYSEL ANTRENMAN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.head}>
          <Text style={styles.headTitle}>DİĞER</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.menuButton}>
            <AntDesign name="linechart" size={24} color="#003740" />
            <Text style={styles.menuButtonTitle}>FİKSTÜR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <AntDesign name="linechart" size={24} color="#003740" />
            <Text style={styles.menuButtonTitle}>P.DURUMU</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  head: {},
  headTitle: {
    color: "white",
  },
  menuButton: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 3,
    backgroundColor: "white",
    flex: 1,
    margin: 2,
    borderRadius: 6,
  },
  menuButtonTitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#003740",
    marginTop: 8,
  },
});
