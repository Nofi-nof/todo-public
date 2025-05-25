import { deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { useTodoCollection } from "~/lib/todoCollection";
import { firestore } from "~/lib/firebaseConfig";

export function useRemoveTodos() {
  const { todoCollection } = useTodoCollection();
  const { collectionName } = useTodoCollection();

  const removeTodo = async () => {
    const q = query(todoCollection, where("isChecked", "==", true));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (d) => {
      await deleteDoc(doc(firestore, collectionName, d.data().id));
    });
  };
  return removeTodo;
}
