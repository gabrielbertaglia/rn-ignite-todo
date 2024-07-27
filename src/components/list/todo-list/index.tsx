import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Text, View } from "react-native";
import { TasksProps } from '../../../.context/ListContext';
import { useTasks } from '../../../@hooks/useTasks';
import { RadioButton } from '../../radio-button';
import { styles } from "./styles";

interface TodoListProps {
  task: TasksProps
}

export function TodoList({ task }: TodoListProps) {
  const { id, isChecked, title } = task
  const { onRemoveTask, onChangeTask } = useTasks()

  function handleRemoveTask() {
    onRemoveTask(id)
  }

  function handleChangeTask() {
    onChangeTask({ id: task.id, checked: !task.isChecked });
  }

  return (
    <View style={[styles.container, task && { borderColor: '#333333', borderWidth: 1 }]}>
      <RadioButton onChange={handleChangeTask} checked={task.isChecked} value={`${title}-${id}`} />
      <Text style={{
        flex: 1,
        color: isChecked ? '#808080' : '#F2F2F2',
        textDecorationLine: isChecked ? 'line-through' : 'none'
      }}>{title}</Text>
      <MaterialCommunityIcons onPress={handleRemoveTask} name="delete-outline" size={24} color="#808080" style={{
        padding: 10
      }} />
    </View>
  )
}