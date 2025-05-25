import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";

test("ボタン上のテキストが「追加」であること", async () => {
  render(<Button>追加</Button>);

  expect(screen.getByRole("button")).toHaveTextContent("追加");
});

test("クリックしたときにonClickイベントが発火すること", () => {
  // モック関数を作成
  const handleClick = vi.fn();

  // コンポーネントをレンダリング
  render(<Button onClick={handleClick}>キャンセル</Button>);

  // ボタン要素を取得
  const button = screen.getByRole("button", { name: /キャンセル/i });

  // ボタンをクリック
  fireEvent.click(button);

  // モック関数が1回呼び出されたことを確認
  expect(handleClick).toHaveBeenCalledTimes(1);
});
