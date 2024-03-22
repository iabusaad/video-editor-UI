import React, { useState } from "react";
import SearchBar from "../components/Searchbar";
import MainButton from "../components/MainButton";
import { IoCut } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';


function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };


  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/edit")
  }
  return (
    <div className={`ml-[16rem] w-[80vw] pt-10 transition-transform duration-300 ${isOpen ? 'translate-x-64' : 'translate-x-0'}`}>
      <div className="flex items-start justify-between ">
        <SearchBar />
        <img src="/img1.jpg" className="rounded-full h-10 w-10" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5 my-8">
          <MainButton
            onClick={handleClick }
            icon=<IoCut />
            children="Create Project"
            className="flex items-center gap-3 font-semibold shadow-lg"
            bgColor="bg-white"
            textColor="black"
          />
          <MainButton
            icon=<FaVideo />
            children="Record Video"
            className="flex items-center gap-3 font-semibold shadow-lg"
            bgColor="bg-white"
            textColor="black"
          />
        </div>
        <div className="flex items-center gap-3">
          <h1 className="font-semibold underline decoration-solid cursor-pointer">
           
            <Link to="/allVideos">
            All Videos
            </Link>
          </h1>
          <span>
            <IoIosArrowForward />
          </span>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold py-5">Recent Videos</h1>
        <div className="flex items-center justify-between gap-10">
          <div className="flex flex-col gap-2">
            <img src="img1.jpg" alt="img1" className="h-60 w-96 rounded-md" />
            <h1>Project Name-1</h1>
          </div>
          <div className="flex flex-col gap-2">
            <img src="img1.jpg" alt="img1" className="h-60 w-96 rounded-md" />
            <h1>Project Name-2</h1>
          </div>
          <div className="flex flex-col gap-2">
            <img src="img1.jpg" alt="img1" className="h-60 w-96 rounded-md" />
            <h1>Project Name-3</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
