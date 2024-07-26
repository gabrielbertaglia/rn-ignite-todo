import { View } from "react-native";
import { useTasks } from "../../../@hooks/useTasks";
import { Paragraph } from "../../paragraph-count";
import { styles } from "./styles";

export function ListHeader() {
  const { tasks } = useTasks()

  const taskCompleted = tasks.reduce((acc: number, crr: { isChecked: any; }) => {
    if (crr.isChecked) {
      return acc + 1
    } else {
      return acc
    }
  }, 0)


  return (
    <View style={styles.container}>
      <Paragraph count={tasks.length} type="created">
        Criadas
      </Paragraph>
      <Paragraph count={taskCompleted} type="finished">
        Concluídas
      </Paragraph>
    </View>
  )
}