import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import { AuthProvider } from "./src/contexts/AuthContext";
import { TeamProvider } from "./src/contexts/TeamContext";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthProvider>
          <TeamProvider>
            <Navigation colorScheme={colorScheme} />
          </TeamProvider>
        </AuthProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
