import { ImageBackground, View } from "react-native";
import bgImage from "../../assets/background-galaxy.png";
import { styles } from "./styles";

interface Props {
  children?: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      defaultSource={bgImage}
      source={bgImage}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}
