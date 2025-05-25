import { useState } from "react";
import { AddTodoDrawewr } from "./components/AddTodoDrawer";
import { GroupedTodoList } from "./components/GroupedTodoList";
import { useTodos } from "./useTodos";
import { useAddTodo } from "./useAddTodo";
import { useRemoveTodos } from "./useRemoveTodos";
import { RemoveTodoButton } from "./components/TodoListActions/removeTodoButton";
import { OpenDrawerButton } from "./components/TodoListActions/openDrawerButton";

//todoリストの表示、todoの追加、削除を行う関数
export default function Pages() {
  const todos = useTodos();

  // Drawerの開閉
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  //TODOをリストに追加する
  const addTodo = useAddTodo();

  //TODOを削除
  const removeTodo = useRemoveTodos();

  return (
    <div>
      <div className="break-all pb-44 px-16 h-[calc(100vh - 80px)]  overflow-scroll">
        <GroupedTodoList todos={todos}></GroupedTodoList>
      </div>
      <div className="flex justify-center">
        <div className="fixed bottom-5 right-0 p-5 z-5 grid gap-5">
          <RemoveTodoButton removeTodo={removeTodo} />
          <OpenDrawerButton setIsOpen={setIsOpen} />
        </div>
      </div>
      <AddTodoDrawewr
        isOpen={isOpen}
        handleClose={handleClose}
        addTodo={addTodo}
      />
    </div>
  );
}
