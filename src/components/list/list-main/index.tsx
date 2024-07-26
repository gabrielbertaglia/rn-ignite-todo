import { FlatList, View } from "react-native";
import { useTasks } from '../../../@hooks/useTasks';
import { Empty } from "../../empty";
import { TodoList } from "../todo-list";
import { styles } from "./styles";

export function ListMain() {
  const { tasks } = useTasks()

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TodoList task={item} />}
        ListEmptyComponent={<Empty />}
      />
    </View>
  )
}