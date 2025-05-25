import { useEffect, useState } from "react";
import { onSnapshot, orderBy, query } from "firebase/firestore";
import { Todo } from "../../Types/Todo";
import { useTodoCollection } from "~/lib/todoCollection";

export function useTodos() {
  //checkboxを含むTODOリスト
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoCollection = useTodoCollection().todoCollection;

  useEffect(() => {
    const q = query(todoCollection, orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const addData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        todo: doc.data().todo as string,
        isChecked: doc.data().isChecked,
        date: doc.data().date,
        group: doc.data().group as string,
      }));
      setTodos(addData);
    });

    // cleanup
    return () => unsubscribe();
  }, []);

  return todos;
}
