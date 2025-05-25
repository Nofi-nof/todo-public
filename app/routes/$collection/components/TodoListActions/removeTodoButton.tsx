import { Button } from "~/components/Button";
import MinusSvg from "~/icon/minus";

type Props = {
  removeTodo: () => void;
};

export const RemoveTodoButton = ({ removeTodo }: Props) => {
  return (
    <Button onClick={removeTodo} aria-label="todoの削除">
      <MinusSvg />
    </Button>
  );
};
