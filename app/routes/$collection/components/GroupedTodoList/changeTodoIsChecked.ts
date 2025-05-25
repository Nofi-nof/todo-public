import { doc, setDoc } from "firebase/firestore";
import { Todo } from "~/Types/Todo";
import { firestore } from "~/lib/firebaseConfig";
import { useTodoCollection } from "~/lib/todoCollection";

// todoのチェックボックスの切り替えを行う
export function useChangeIsChecked() {
  const { collectionName } = useTodoCollection();

  const changeIsChecked = (todo: Todo, isChecked: boolean) => {
    const docPath = doc(firestore, collectionName, todo.id);

    setDoc(docPath, {
      ...todo,
      isChecked,
    });
  };

  return changeIsChecked;
}
