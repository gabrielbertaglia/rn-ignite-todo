import { useContext } from "react";
import { ListContext } from '../.context/ListContext';

export function useTasks(){
  const ctx = useContext(ListContext)
  return ctx
}