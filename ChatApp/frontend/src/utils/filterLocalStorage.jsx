export const filterLocalStorage = () => {
  const user = localStorage.getItem("user");
  const userFilter = user
    .split("")
    .filter((kyTu) => kyTu !== '"')
    .join("");
  return userFilter;
};
