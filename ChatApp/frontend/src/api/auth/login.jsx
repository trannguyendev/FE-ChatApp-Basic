import { api } from "../api";
import { toast } from "react-toastify";

export const apiLogin = async (email, password) => {
  const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    let data = await api.post("/login", {
      username: email,
      password: password,
    });
    const userData = data.data.user;
    //delete object password
    delete userData.password;

    toast.promise(
      resolveAfter3Sec.then(() => data.data.message),
      {
        pending: "Đợi xíu nhé đang xử lí",
        success: data.data.message,
        error: data.message,
      }
    );
    localStorage.setItem("user", JSON.stringify(userData.id));
    //Navigate to /chat, save Data user localStorage
    if (data.data.status == "success") {
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    }

    return;
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
