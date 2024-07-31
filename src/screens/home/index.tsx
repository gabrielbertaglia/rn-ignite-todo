import { Keyboard, TextInput, TouchableOpacity, View } from 'react-native'
import { Header } from '../../components/header'
import { styles } from './styles'

import AntDesign from '@expo/vector-icons/AntDesign'
import { useState } from 'react'
import { useTasks } from '../../@hooks/useTasks'
import { List } from '../../components/list'

export function Home() {
  const [isFocused, setIsFocused] = useState(false)
  const [addNewTask, setAddNewTask] = useState('')
  const { onAddTask } = useTasks()

  function handleAddTask() {
    onAddTask(addNewTask)
    setAddNewTask('')
    Keyboard.dismiss()
  }

  const isDisabled = addNewTask === ''

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.content}>
          <TextInput
            style={[styles.input, isFocused && styles.inputFocused]}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={addNewTask}
            onChangeText={setAddNewTask}
          />
          <TouchableOpacity
            style={[styles.addButton, { opacity: isDisabled ? 0.7 : 1 }]}
            onPress={handleAddTask}
            disabled={isDisabled}
          >
            <AntDesign
              style={{ fontSize: 16 }}
              name="pluscircleo"
              size={15}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <List />
      </View>
    </>
  )
}
