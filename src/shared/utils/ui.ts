export const currentPath = (href: string, pathname: string) => {
  if (href === "/dashboard") {
    return pathname === "/dashboard";
  }
};

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
