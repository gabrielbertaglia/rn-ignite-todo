import { View } from "react-native";
import { ListHeader } from "./list-header";
import { ListMain } from "./list-main";
import { styles } from "./styles";

export function List() {
  return (
    <View style={styles.container}>
      <ListHeader />
      <ListMain />
    </View>
  )
}