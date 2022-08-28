import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";
import {FontAwesome} from "@expo/vector-icons";
import * as React from "react";
import Hucum from "./Hucum";
import Defans from "./Defans";

const BottomTab = createBottomTabNavigator();

function Kabiliyetler() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}>
            <BottomTab.Screen
                name="TabOne"
                component={Hucum}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color }) => <TabBarIcon name="square" color={color} />,
                    headerShown:false
                })}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={Defans}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                    headerShown:false
                }}
            />
            <BottomTab.Screen
                name="TabTwo2"
                component={Defans}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                    headerShown:false
                }}
            />
        </BottomTab.Navigator>
    );
}
function TabBarIcon(props) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default Kabiliyetler;