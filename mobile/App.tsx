import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";
import { Background } from "./src/components/Background";
import {
  useFonts,
  Inter_400Regular,
  Inter_900Black,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Loader } from "./src/components/Loader";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Home /> : <Loader />}
    </Background>
  );
}
