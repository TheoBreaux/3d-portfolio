import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { images } from "../pages/index.js";

const ImagePage = () => {
  const { imageName } = useParams();
  const navigate = useNavigate();
  const imageSrc = images[imageName];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <img
        src={imageSrc}
        className="max-w-full  max-h-[150vh] object-fill rounded-lg shadow-lg mt-20"
        alt={imageName}
      />
      <button
        onClick={() => navigate("/marketing")}
        className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
      >
        Back to Gallery
      </button>
    </div>
  );
};

export default ImagePage;
