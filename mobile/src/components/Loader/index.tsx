import { View, ActivityIndicator } from "react-native";
import { THEME } from "../../theme";
import { styles } from "./styles";

export function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={THEME.COLORS.PRIMARY} />
    </View>
  );
}
