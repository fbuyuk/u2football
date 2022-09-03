import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import LinkingConfiguration from "./LinkingConfiguration";
import Kabiliyetler from "../screens/Kabiliyetler";
import Anasayfa from "../screens/Anasayfa";
import Antrenman from "../screens/Antrenman";
import { Button, View, Text, TouchableOpacity } from "react-native";
import Takim from "../screens/Takim";
import OyuncuBul from "../screens/OyuncuBul";
import OyuncuDetay from "../screens/OyuncuDetay";
import Oyuncular from "../screens/Takim/Oyuncular";
import Gecmis from "../screens/Gecmis";
import Kayit from "../screens/Kayit";
import { navigationRef } from "./RootNavigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useAuth } from "../contexts/AuthContext";
import Taktik from "../screens/Taktik";

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      ref={navigationRef}
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
function RootNavigator() {
  const { token, logout, tdp, bank } = useAuth();

  if (!token) {
    return (
      <>
        <Kayit />
      </>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        title: "U2FOOTBALL",
        headerStyle: {
          backgroundColor: "#28616b",
        },
        headerTitleStyle: { fontWeight: "bold" },
        headerRight: () => (
          <View style={{ flexDirection: "row" }}>
            <Button
              onPress={() => alert("Bütçe güncellendi")}
              title={`€${bank}M`}
              color="#003740"
            />
            <Button
              onPress={() => alert("TDP güncellendi")}
              title={`TDP:${tdp}`}
              color="#003740"
            />
            <TouchableOpacity
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 4,
              }}
              onPress={() => logout()}
            >
              <MaterialCommunityIcons
                name="exit-to-app"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        ),
      }}
    >
      <Stack.Screen name="Root" component={Anasayfa} />
      <Stack.Screen name="Antrenman" component={Antrenman} />
      <Stack.Screen name="Kabiliyet" component={Kabiliyetler} />
      <Stack.Screen name="Takim" component={Takim} />
      <Stack.Screen name="Taktik" component={Taktik} />
      <Stack.Screen name="Oyuncular" component={Oyuncular} />
      <Stack.Screen name="Gecmis" component={Gecmis} />
      <Stack.Screen name="OyuncuBul" component={OyuncuBul} />
      <Stack.Screen name="OyuncuDetay" component={OyuncuDetay} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
