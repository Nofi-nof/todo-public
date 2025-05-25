import { Todo } from "~/types/Todo";
import { groupLabelList } from "~/constants/groupLabelList";

export function groupByTodoList(todos: Todo[]) {
  const groupDivide = Object.groupBy(todos, (t) => t.group);

  return Object.entries(groupDivide).sort(([a], [b]) =>
    groupLabelList.findIndex((value) => value === a) >
    groupLabelList.findIndex((value) => value === b)
      ? 1
      : -1
  );
}
