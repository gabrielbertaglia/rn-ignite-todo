import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

export interface TasksProps {
  id: string;
  title: string;
  isChecked: boolean;
}

export interface ListContextProps {
  tasks: TasksProps[];
  onAddTask: (title: string) => void;
  onRemoveTask: (id: string) => void;
  onChangeTask: ({ id, checked }: { id: string, checked: boolean }) => void
}

interface ListProviderProps {
  children: React.ReactNode;
}

export const ListContext = createContext({} as ListContextProps)

export function ListProvider({ children }: ListProviderProps) {

  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [lastId, setLastId] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem('ignite-todo-list').then(storedTasks => {
      try {
        const parsedTasks = storedTasks ? JSON.parse(storedTasks) : [];
        setTasks(parsedTasks);
      } catch (error) {
        console.error('Erro ao parsear tasks:', error);
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('ignite-lastId').then(storedLastId => {
      try {
        const parsedLastId = storedLastId ? JSON.parse(storedLastId) : 0;
        setLastId(parsedLastId);
      } catch (error) {
        console.error('Erro ao parsear lastId:', error);
      }
    });
  }, []);

  function onAddTask(title: string) {
    const newId = lastId + 1;
    setTasks(state => [...state, {
      id: newId.toString(),
      isChecked: false,
      title
    }])
    setLastId(newId);
  }

  function onRemoveTask(id: string) {
    setTasks(state => state.filter(task => task.id !== id));
  }

  function onChangeTask({ id, checked }: { id: string, checked: boolean }) {
    setTasks(state => state.map(task => task.id === id ? { ...task, isChecked: checked } : { ...task }))
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(tasks)
    AsyncStorage.setItem('ignite-todo-list', stateJSON)
  }, [tasks])

  useEffect(() => {
    const stateLastIdJSON = JSON.stringify(lastId)
    AsyncStorage.setItem('ignite-lastId', stateLastIdJSON)
  }, [lastId])

  return (
    <ListContext.Provider value={{
      tasks,
      onAddTask,
      onChangeTask,
      onRemoveTask
    }}>
      {children}
    </ListContext.Provider>
  )
}