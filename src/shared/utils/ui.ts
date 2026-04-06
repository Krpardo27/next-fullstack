export const currentPath = (href: string, pathname: string) => {
  if (pathname === href) return true;

  if (href === "/admin") return false;

  return pathname.startsWith(href + "/");
};