import { useState } from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function StadView({ playerId = null }) {
  const [selected, setSelected] = useState(playerId);

  const selectPlayer = (number) => setSelected(number);
  return (
    <View style={styles.container}>
      <Image
        resizeMode={"contain"}
        style={{ width: null, height: 220 }}
        source={require("../../assets/images/saha.png")}
      />
      <TouchableOpacity
        style={[
          styles.TouchableOpacity,
          styles.f1,
          selected == 1 && styles.selected,
        ]}
        onPress={() => selectPlayer(1)}
      >
        <Image
          resizeMode={"contain"}
          style={{ width: 30, height: 30 }}
          source={require("../../assets/images/forma.png")}
        />
        <Text style={styles.TouchableOpacityTitle}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.TouchableOpacity,
          styles.f2,
          selected == 2 && styles.selected,
        ]}
        onPress={() => selectPlayer(2)}
      >
        <Image
          resizeMode={"contain"}
          style={{ width: 30, height: 30 }}
          source={require("../../assets/images/forma.png")}
        />
        <Text style={styles.TouchableOpacityTitle}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.TouchableOpacity,
          styles.f3,
          selected == 3 && styles.selected,
        ]}
        onPress={() => selectPlayer(3)}
      >
        <Image
          resizeMode={"contain"}
          style={{ width: 30, height: 30 }}
          source={require("../../assets/images/forma.png")}
        />
        <Text style={styles.TouchableOpacityTitle}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.TouchableOpacity,
          styles.f4,
          selected == 4 && styles.selected,
        ]}
        onPress={() => selectPlayer(4)}
      >
        <Image
          resizeMode={"contain"}
          style={{ width: 30, height: 30 }}
          source={require("../../assets/images/forma.png")}
        />
        <Text style={styles.TouchableOpacityTitle}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.TouchableOpacity,
          styles.f5,
          selected == 5 && styles.selected,
        ]}
        onPress={() => selectPlayer(5)}
      >
        <Image
          resizeMode={"contain"}
          style={{ width: 30, height: 30 }}
          source={require("../../assets/images/forma.png")}
        />
        <Text style={styles.TouchableOpacityTitle}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.TouchableOpacity,
          styles.f6,
          selected == 6 && styles.selected,
        ]}
        onPress={() => selectPlayer(6)}
      >
        <Image
          resizeMode={"contain"}
          style={{ width: 30, height: 30 }}
          source={require("../../assets/images/forma.png")}
        />
        <Text style={styles.TouchableOpacityTitle}>6</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.TouchableOpacity,
          styles.f7,
          selected == 7 && styles.selected,
        ]}
        onPress={() => selectPlayer(7)}
      >
        <Image
          resizeMode={"contain"}
          style={{ width: 30, height: 30 }}
          source={require("../../assets/images/forma.png")}
        />
        <Text style={styles.TouchableOpacityTitle}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.TouchableOpacity,
          styles.f8,
          selected == 8 && styles.selected,
        ]}
        onPress={() => selectPlayer(8)}
      >
        <Image
          resizeMode={"contain"}
          style={{ width: 30, height: 30 }}
          source={require("../../assets/images/forma.png")}
        />
        <Text style={styles.TouchableOpacityTitle}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.TouchableOpacity,
          styles.f9,
          selected == 9 && styles.selected,
        ]}
        onPress={() => selectPlayer(9)}
      >
        <Image
          resizeMode={"contain"}
          style={{ width: 30, height: 30 }}
          source={require("../../assets/images/forma.png")}
        />
        <Text style={styles.TouchableOpacityTitle}>9</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.TouchableOpacity,
          styles.f10,
          selected == 10 && styles.selected,
        ]}
        onPress={() => selectPlayer(10)}
      >
        <Image
          resizeMode={"contain"}
          style={{ width: 30, height: 30 }}
          source={require("../../assets/images/forma.png")}
        />
        <Text style={styles.TouchableOpacityTitle}>10</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.TouchableOpacity,
          styles.f11,
          selected == 11 && styles.selected,
        ]}
        onPress={() => selectPlayer(11)}
      >
        <Image
          resizeMode={"contain"}
          style={{ width: 30, height: 30 }}
          source={require("../../assets/images/forma.png")}
        />
        <Text style={styles.TouchableOpacityTitle}>11</Text>
      </TouchableOpacity>
      <View>
        <Text style={{ textAlign: "center", color: "white" }}>4-2-3-1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 220,
    paddingHorizontal: 10,
    backgroundColor: "#003740",
  },
  TouchableOpacity: {
    borderRadius: 50,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  TouchableOpacityTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    position: "absolute",
  },
  selected: {
    borderWidth: 4,
    borderColor: "red",
    backgroundColor: "red",
    paddingHorizontal: 10,
  },
  f1: {
    top: 96,
    left: 25,
  },
  f2: {
    top: 26,
    left: 90,
  },
  f3: {
    top: 70,
    left: 90,
  },
  f4: {
    top: 124,
    left: 90,
  },
  f5: {
    top: 160,
    left: 90,
  },
  f6: {
    top: 50,
    left: 140,
  },
  f7: {
    top: 146,
    left: 140,
  },
  f8: {
    top: 40,
    left: 200,
  },
  f9: {
    top: 96,
    left: 200,
  },
  f10: {
    top: 150,
    left: 200,
  },
  f11: {
    top: 96,
    left: 245,
  },
});
