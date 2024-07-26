import React, { createContext, useState } from "react";

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
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [lastId, setLastId] = useState(0);

  function onAddTask(title: string) {
    console.log(title)
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