"use client";
import React from "react";
import { Vortex } from "./ui/vortex";
import Link from "next/link";

// const btn = document.getElementById('btn');
//   btn.addEventListener("click", function () {
//     window.location.href = "login/login_page.html";
// });

export default function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  overflow-hidden pt-16  h-screen">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Welcome to Our Photo Gallary
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        Photography captures moments, emotions, and stories through images, blending artistry with technical skill and vision.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Link href={'/contact'}> 
          <button id="btn" className="px-4 py-2 bg-gray-600 hover:bg-gray-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Join Our Club 
          </button>
          </Link>
          
        </div>
      </Vortex>
    </div>
  );
  
}
