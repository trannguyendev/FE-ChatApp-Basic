import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { userData } from "../../api/users/getUser";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { filterLocalStorage } from "../../utils/filterLocalStorage.jsx";
import { useNavigate } from "react-router-dom";
import { set } from "firebase/database";
const Sidebar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const userId = filterLocalStorage();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await userData(userId);
        setUser(data.data.data);
      } catch (error) {
        if (error.response.data.status == "failed") {
          toast.error(error.response.data.message);
          toast.error("Vui lòng đăng nhập lại");
          setTimeout(() => {
            localStorage.removeItem("user");
            location.reload();
          }, 3000);
        }
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-white shadow-lg">
        <div className=" flex items-center justify-between mt-2">
          <div className="flex gap-4 ml-4">
            <img src={user.avatar} width="45" height="45" />
            <div className="flex flex-col items-start">
              <div className="text-xl font-bold">{user.displayName}</div>
              <div className="text-sm text-gray-600">{user.role}</div>
            </div>
          </div>
          <FontAwesomeIcon
            // onClick={handleClear}
            icon={faRightFromBracket}
            className="size-5 mr-5 cursor-pointer"
          />
        </div>
        <div className="p-4">
          <input
            type="text"
            placeholder="Search Here..."
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
