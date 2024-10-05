import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const EditProfile = () => {
  function logout() {
    toast.success("Đăng xuất thành công");
    setTimeout(() => {
      localStorage.clear();
      location.reload();
    }, 3000);
  }
  return (
    <div className=" p-4 bg-white shadow-md flex mt-auto items-center space-x-2 justify-center">
      <FontAwesomeIcon
        onClick={logout}
        icon={faRightFromBracket}
        className="size-8 mr-5 cursor-pointer"
        title="Đăng xuất"
      />
      <FontAwesomeIcon
        icon={faUser}
        className="size-8 mr-5 cursor-pointer "
        title="Thông tin người dùng"
      />
    </div>
  );
};

export default EditProfile;
