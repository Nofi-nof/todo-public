import { render } from "@testing-library/react";
import { OpenDrawerButton } from "./openDrawerButton";
import userEvent from "@testing-library/user-event";

describe("OpenDrawerButton", () => {
  it("プラスボタンを押した時、ドロワーが開くこと", async () => {
    // 準備
    const user = userEvent.setup();
    const setIsOpen = vi.fn();
    const { getByRole } = render(<OpenDrawerButton setIsOpen={setIsOpen} />);

    //実行
    await user.click(
      getByRole("button", { name: "todoを追加するドロワーを開くボタン" })
    );

    //確認
    expect(setIsOpen).toBeCalledTimes(1);
  });
});
