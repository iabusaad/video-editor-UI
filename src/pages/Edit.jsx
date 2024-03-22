import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaPlusSquare } from "react-icons/fa";
import { FaArrowPointer } from "react-icons/fa6";
import { FaHandPaper } from "react-icons/fa";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import Button from "../components/Button";
import MusicPlayer from "../components/MusicButton";

function Edit() {
  const [zoomLevel, setZoomLevel] = useState(100); 

  const handleZoomChange = (e) => {
    const newZoomLevel = parseInt(e.target.value);
    setZoomLevel(newZoomLevel);
  }
  return (
    <div className="ml-64 flex items-center flex-col">
      <div className="flex items-start ">
        <div className="flex flex-col gap-5 border border-gray-400 h-[70vh] p-5">
          <h1 className="text-2xl font-semibold text-center">Assets</h1>
          <div className="flex items-center gap-3">
            <img src="/img1.jpg" alt="img1" className="h-28 w-44" />
            <img src="/img1.jpg" alt="img1" className="h-28 w-44 pr-7" />
          </div>
          <div className="flex items-center justify-end gap-10 mt-64">
            <FaPlusSquare size={30} />
            <div className="flex gap-3">
              <IoMenu size={30} />
              <IoMenu size={30} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 border border-gray-400 h-[70vh] p-5">
          <div className="flex items-center justify-center gap-3">
            <FaArrowPointer />
            <FaHandPaper />
            <FaExpandArrowsAlt />
            <div className="flex justify-center items-center">
        <label className="mr-2">Zoom:</label>
        <input 
          type="range" 
          min="20" 
          max="100" 
          step="10" 
          value={zoomLevel} 
          onChange={handleZoomChange} 
        />
        <span className="ml-2">{zoomLevel}%</span>
      </div>
          </div>
          <div className="relative">
        <img 
          src="/img1.jpg" 
          alt="Placeholder Image" 
          style={{ width: `${zoomLevel}%`, transition: 'width 0.3s ease-in-out' }}
        />
      </div>
        </div>
        <div className="flex flex-col gap-5 border border-gray-400 h-[70vh] w-[23rem] pt-4">
          <div className="flex items-center justify-end gap-3 pr-5">
            <FaUpload />
            <Button children="Export" className="px-3 py-2" />
          </div>
          <div className="border-b border-gray-500"></div>
        </div>
      </div>
      <div className="border border-gray-500 w-full h-14">
        <div>
          <MusicPlayer />
        </div>
      </div>
      <div className="border border-gray-500 w-full h-36">
        <img src="/img1.jpg" alt="image"
          className="w-full h-36"
        />
      </div>
    </div>
  );
}

export default Edit;
