import { FormHTMLAttributes } from "react";
import clsx from "clsx";

type Props = FormHTMLAttributes<HTMLFormElement>;

export default function Form(props: Props) {
  const { children, className } = props;

  return (
    <form
      {...props}
      className={clsx(
        "w-full",
        "rounded-2xl shadow-md",
        "p-6 md:p-8",
        "space-y-6",
        className
      )}
    >
      {children}
    </form>
  );
}
