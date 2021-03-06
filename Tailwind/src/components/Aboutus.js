import React from "react";
import profile from "../img/profile.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Aboutus = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div className="block lg:hidden rounded-full mx-auto w-48  bg-center">
              <img
                src={profile}
                alt="description of "
                className="h-100 w-100 rounded-xl"
              />
            </div>

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Rafay Farrukh</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              I am a british Asian Actor mostly working for Pakistan
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              Lahore
            </p>
            <p className="pt-8 text-sm">
              Totally optional short description about yourself, what you do and
              so on.
            </p>

            <div className="pt-12 pb-8">
              <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
                Get In Touch
              </button>
            </div>

            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
              <GitHubIcon />
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <YouTubeIcon />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5 md:rounded-xl">
          <img
            src={profile}
            alt="description of "
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block md:rounded-xl"
          />
        </div>

        {/* <div className="absolute top-0 right-0 h-12 w-18 p-4">
          <button className="js-change-theme focus:outline-none">????</button>
        </div> */}
      </div>
    </>
  );
};

export default Aboutus;
