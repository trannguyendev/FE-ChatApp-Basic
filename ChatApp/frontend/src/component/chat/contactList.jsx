import { api } from "../../api/api";
// import { getAllUser } from "../../api/users/getAllUser";

import { Fragment, useEffect, useState } from "react";
import { filterLocalStorage } from "../../utils/filterLocalStorage";
import { Link } from "react-router-dom";

const ContactList = () => {
  const [customers, setCustomers] = useState([]);
  const userId  = filterLocalStorage()
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await api.get("/getAllUser");
        setCustomers(data.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  const filterContactList = customers.filter((user) => userId !== user.id);

  const dataContactList = filterContactList.map((data) => (
    <Fragment key={data.id}>
      <Link className="flex items-center space-x-2" to={"/chat/" + data.id}>
        <div className="w-10 h-10 rounded-full bg-gray-300">
          <img src={data.avatar} alt="" />
        </div>
        <div className="flex flex-col items-start">
          <div className="font-bold">{data.displayName}</div>
          <div className="text-sm text-gray-600">
            Hi, are you available tomorrow?
          </div>
        </div>
      </Link>
    </Fragment>
  ));
  return (
    <div className="p-4 space-y-4">
      {dataContactList}

      {/* Add more contacts similarly */}
    </div>
  );
};

export default ContactList;
