import { toast } from "react-toastify";
import { api } from "../api";

export const apiRegister = async (
  username,
  email,
  password,
  gender,
  navigate
) => {
  const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    let data = await api.post("register/", {
      username: username,
      displayName: username,
      email: email,
      password: password,
      gender: gender,
    });
    toast.promise(
      resolveAfter3Sec.then(() => data.data.message),
      {
        pending: "Đợi xíu nhé đang xử lí",
        success: data.data.message,
        error: data.message,
      }
    );
    //delete property password
    const userData = data.data.data;
    delete userData.password;
    localStorage.setItem("user", JSON.stringify(userData.id));

    // success to chat
    if (data.data.status == "success") {
      setTimeout(() => {
        navigate("/chat");
      }, 4000);
    }
  } catch (error) {
    toast.promise(
      resolveAfter3Sec.then(() => {
        throw error.response.data;
      }),
      {
        pending: "Đợi xíu nhé đang xử lí",
        error: error.response.data.message,
      }
    );
  }
};
