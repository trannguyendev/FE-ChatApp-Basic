import videoSrc from "../../img/introVideo.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  return (
    <div className=" w-screen h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 border-solid border-2 border-sky-500 rounded-md box-border w-100 self-center max-w-[100%] bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <FontAwesomeIcon
          className="mx-auto h-10 w-auto flex items-center justify-center mt-10"
          icon={faDragon}
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-100 hover:text-stone-950">
          Let's chat with your friends
        </h2>
      </div>
      <div className="flex items-center justify-center mt-10">
        <video autoPlay loop muted className="w-64 h-64">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Link to="/login" className="hover:text-white">
        <div className="mx-auto h-10 w-auto flex items-center justify-center mt-10">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <p className="mx-auto h-10 w-auto flex items-center justify-center mt-2 text-2xl font-extrabold hover:underline">
          Join us
        </p>
      </Link>
    </div>
  );
};
export default Intro;
