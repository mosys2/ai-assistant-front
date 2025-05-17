// utils/menuKeyMapper.ts
export const routeToMenuKeyMap: Record<string, string> = {
  "/dashboard": "1",
  "/dashboard/": "2",
  "/dashboard/legal-documents/laws": "3-1",
  "/dashboard/legal-documents/policies": "3-2",
  "/dashboard/official-letters/announcement": "4-1",
  "/dashboard/official-letters/request": "4-2",
  "/dashboard/custom-document": "5",
};

export const getMenuKeyFromPath = (path: string): string => {
  return (
    Object.keys(routeToMenuKeyMap).find((route) => path.startsWith(route)) || "1"
  );
};
