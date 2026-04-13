import { TextareaHTMLAttributes } from "react";
import clsx from "clsx";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function FormTextarea({ className, ...props }: Props) {
  return (
    <textarea
      {...props}
      className={clsx(
        "w-full rounded-xl border border-zinc-300  px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200",
        className,
      )}
    />
  );
}
