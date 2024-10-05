import { filterLocalStorage } from "../../utils/filterLocalStorage";
import { api } from "../api";

export const userData = async (user) => {

  const data = await api.post("/getUser", {
    id: user,
  });
  return data;
};
