import { useParams } from "@remix-run/react";
import { collection } from "firebase/firestore";
import { firestore } from "./firebaseConfig";

export function useTodoCollection() {
  const params = useParams();

  const collectionName = params.collection!;
  const todoCollection = collection(firestore, collectionName);

  return { collectionName, todoCollection };
}
