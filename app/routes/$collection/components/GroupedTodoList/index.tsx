import { Fragment } from "react";
import { Checkbox, Label } from "flowbite-react";
import { Todo } from "~/Types/Todo";
//import文
import { useChangeIsChecked } from "./changeTodoIsChecked";
import { groupByTodoList } from "./groupByTodoList";

type Props = {
  todos: Todo[];
};

export function GroupedTodoList({ todos }: Props) {
  const changeIsChecked = useChangeIsChecked();

  return groupByTodoList(todos).map(([label, todos]) => (
    <Fragment key={label}>
      <h3 className="text-lg text-cyan-700 font-bold">{label}</h3>
      {todos?.map((todo) => (
        <Label
          key={todo.id}
          className={`pb-5 pt-1 pl-2 flex text-base break-all ${
            todo.isChecked ? "line-through" : ""
          }`}
        >
          <Checkbox
            checked={todo.isChecked}
            onChange={(e) => changeIsChecked(todo, e.target.checked)}
            className="h-6 w-6 mr-4"
          ></Checkbox>
          {todo.todo}
        </Label>
      ))}
    </Fragment>
  ));
}
