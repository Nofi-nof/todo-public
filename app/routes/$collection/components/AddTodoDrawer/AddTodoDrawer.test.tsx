import { render, within } from "@testing-library/react";
import { AddTodoDrawewr } from ".";
import userEvent from "@testing-library/user-event";

describe("AddTodoDrawer", () => {
  it("追加ボタンを押した時、入力したTodoとグループがaddTodo関数に渡されること", async () => {
    const user = userEvent.setup();
    const addTodo = vi.fn();
    const { getByRole } = render(
      <AddTodoDrawewr isOpen handleClose={vi.fn()} addTodo={addTodo} />
    );

    // Todoの内容を入力
    await user.type(getByRole("textbox"), "テスト");
    await user.click(getByRole("button", { name: "グループ" }));
    await user.click(
      within(getByRole("menu")).getByRole("button", { name: "スーパー" })
    );

    // Todoの追加を実行
    await user.click(getByRole("button", { name: "追加" }));

    // Assert
    expect(addTodo).toBeCalledTimes(1);
    expect(addTodo).toBeCalledWith("テスト", "スーパー");
  });

  it("エンターキーを押した時、入力したTodoとグループがaddTodo関数に渡されること", async () => {
    const user = userEvent.setup();
    const addTodo = vi.fn();
    const { getByRole } = render(
      <AddTodoDrawewr isOpen handleClose={vi.fn()} addTodo={addTodo} />
    );

    // Todoの内容を入力
    await user.type(getByRole("textbox"), "テスト");
    await user.click(getByRole("button", { name: "グループ" }));
    await user.click(
      within(getByRole("menu")).getByRole("button", { name: "スーパー" })
    );

    // textboxを選択してEnterKeyを押す
    await user.type(getByRole("textbox"), "{enter}");

    // Assert
    expect(addTodo).toBeCalledTimes(1);
    expect(addTodo).toBeCalledWith("テスト", "スーパー");
  });
});
