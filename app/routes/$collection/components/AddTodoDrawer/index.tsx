import { TextInput, Drawer, Dropdown } from "flowbite-react";
import { Button } from "../../../../components/Button";
import { useState } from "react";
import { groupLabelList } from "~/constants/groupLabelList";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  addTodo: (todo: string, group: string) => Promise<void>;
};

export function AddTodoDrawewr({ isOpen, handleClose, addTodo }: Props) {
  const [todo, setTodo] = useState("");
  const [group, setGroup] = useState("");

  const handleAddTodo = async () => {
    await addTodo(todo, group);
    setTodo("");
    setGroup("");
  };

  //TODOをリストに追加する(enterキー押下時)
  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== "Enter") return;
    await handleAddTodo();
  };

  return (
    <Drawer
      open={isOpen}
      onClose={handleClose}
      position="bottom"
      className="p-9"
    >
      <Drawer.Items className="grid gap-4 grid-cols-1">
        <TextInput
          placeholder="ミルク"
          className="h-10"
          style={{ fontSize: 16 }}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
        ></TextInput>
        <Dropdown placement="right" label={group || "グループ"}>
          {groupLabelList.map((groupLabel) => (
            <Dropdown.Item
              key={groupLabel}
              onClick={() => setGroup(groupLabel)}
            >
              {groupLabel}
            </Dropdown.Item>
          ))}
        </Dropdown>
        <Button
          onClick={handleAddTodo}
          className="h-10 rounded-lg text-xs w-full"
        >
          追加
        </Button>
        <Button
          onClick={handleClose}
          className="h-10 rounded-lg text-xs w-full bg-gray-200 text-gray-700"
        >
          キャンセル
        </Button>
      </Drawer.Items>
    </Drawer>
  );
}
