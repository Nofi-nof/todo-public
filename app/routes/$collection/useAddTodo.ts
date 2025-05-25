import { addDoc, collection } from "firebase/firestore";
import { useCallback } from "react";
import { firestore } from "~/lib/firebaseConfig";
import { useTodoCollection } from "~/lib/todoCollection";

export function useAddTodo() {
  const { todoCollection } = useTodoCollection();

  const addTodo = useCallback(async (todo: string, group: string) => {
    if (todo.trim()) {
      await addDoc(todoCollection, {
        todo: todo,
        isChecked: false,
        date: new Date(),
        group: group,
      });
    }
  }, []);

  return addTodo;
}
