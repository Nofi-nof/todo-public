import { useState } from "react";
import { Button } from "~/components/Button";
import PlusSvg from "~/icon/plus";

type Props = {
  setIsOpen: (isOpen: boolean) => void;
};

export const OpenDrawerButton = ({ setIsOpen }: Props) => {
  return (
    <Button
      onClick={() => setIsOpen(true)}
      aria-label="todoを追加するドロワーを開くボタン"
    >
      <PlusSvg />
    </Button>
  );
};
