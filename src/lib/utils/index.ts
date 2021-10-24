export const getPath = (path: string) => {
  const planetName = path.split("/");
  return planetName[planetName.length - 1];
};
