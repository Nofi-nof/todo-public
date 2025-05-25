import { Button as FlowbiteButton } from "flowbite-react";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof FlowbiteButton>;

export const Button = ({ children, ...props }: Props) => {
  return (
    <FlowbiteButton pill className=" h-14 w-14 items-center" {...props}>
      {children}
    </FlowbiteButton>
  );
};
