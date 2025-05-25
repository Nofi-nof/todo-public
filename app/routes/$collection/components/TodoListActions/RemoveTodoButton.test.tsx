import userEvent from "@testing-library/user-event";
import { RemoveTodoButton } from "./removeTodoButton";
import { render } from "@testing-library/react";

describe("RemoveTodoButton", () => {
  it("マイナスボタンを押した時、todo削除の関数が実行されること", async () => {
    //準備
    const user = userEvent.setup();
    const removeTodo = vi.fn();
    const { getByRole } = render(<RemoveTodoButton removeTodo={removeTodo} />);

    //実行
    await user.click(getByRole("button", { name: "todoの削除" }));

    //確認
    expect(removeTodo).toBeCalledTimes(1);
  });
});
