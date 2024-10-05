import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faDragon } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-indigo-600 text-white py-4 fixed bottom-0 left-0">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FontAwesomeIcon className="ml-2 h-10 w-auto" icon={faDragon} />
            <h2 className="ml-4">
              Have a trouble?{" "}
              <Link
                to=""
                className="hover:underline hover:font-bold hover:text-cyan-400"
              >
                Contact with us
              </Link>
            </h2>
          </div>
          <p className="text-sm mt-2">© Copyright by SongLong Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
