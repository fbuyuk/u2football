import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import StadView from "../../components/StadView";

const Antrenman = ({ route, navigation }) => {
  const { playerId } = route.params;
  const antrenmanYap = () => {
    alert("Antrenman başarıyla tamamlandı!");
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#28616b" }}>
      <StadView playerId={playerId} />
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity onPress={antrenmanYap} style={styles.menuButton}>
            <Text style={styles.headTitle}>Strateji</Text>
            <Image
              resizeMode={"contain"}
              style={{ width: "100%", height: 80 }}
              source={require("../../../assets/images/anrenman.jpg")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={antrenmanYap} style={styles.menuButton}>
            <Text style={styles.headTitle}>Defans Eğitimi</Text>
            <Image
              resizeMode={"contain"}
              style={{ width: "100%", height: 80 }}
              source={require("../../../assets/images/anrenman.jpg")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={antrenmanYap} style={styles.menuButton}>
            <Text style={styles.headTitle}>Hucum Eğitimi</Text>
            <Image
              resizeMode={"contain"}
              style={{ width: "100%", height: 80 }}
              source={require("../../../assets/images/anrenman.jpg")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={antrenmanYap} style={styles.menuButton}>
            <Text style={styles.headTitle}>Kros Çalışması</Text>
            <Image
              resizeMode={"contain"}
              style={{ width: "100%", height: 80 }}
              source={require("../../../assets/images/anrenman.jpg")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={antrenmanYap} style={styles.menuButton}>
            <Text style={styles.headTitle}>Şut Çalışması</Text>
            <Image
              resizeMode={"contain"}
              style={{ width: "100%", height: 80 }}
              source={require("../../../assets/images/anrenman.jpg")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={antrenmanYap} style={styles.menuButton}>
            <Text style={styles.headTitle}>Kaleci Eğitimi</Text>
            <Image
              resizeMode={"contain"}
              style={{ width: "100%", height: 80 }}
              source={require("../../../assets/images/anrenman.jpg")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={antrenmanYap} style={styles.menuButton}>
            <Text style={styles.headTitle}>Koşu Çalışması</Text>
            <Image
              resizeMode={"contain"}
              style={{ width: "100%", height: 80 }}
              source={require("../../../assets/images/anrenman.jpg")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={antrenmanYap} style={styles.menuButton}>
            <Text style={styles.headTitle}>Hasta Ziyareti</Text>
            <Image
              resizeMode={"contain"}
              style={{ width: "100%", height: 80 }}
              source={require("../../../assets/images/anrenman.jpg")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={antrenmanYap} style={styles.menuButton}>
            <Text style={styles.headTitle}>Masaj</Text>
            <Image
              resizeMode={"contain"}
              style={{ width: "100%", height: 80 }}
              source={require("../../../assets/images/anrenman.jpg")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Antrenman;

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
    alignItems: "center",
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
