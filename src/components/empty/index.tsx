import { Text, View } from "react-native";
import { styles } from "./styles";

import Clipboard from '../../assets/clipboard.svg';

export function Empty() {
  return (
    <View style={styles.container}>
      <Clipboard />
      <Text style={styles.noTasks}>Você ainda não tem tarefas cadastradas{"\n"}
        <Text style={styles.createTasks}>Crie tarefas e organize seus itens a fazer</Text>
      </Text>
    </View>
  )
}