"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import pic from "@/data/river.json";
import { BackgroundBeams } from "../../components/ui/background-beams";

export default function page() {
  return (

    <div className=" p-3 flex flex-col h-auto mt-16">

      <div className="text-center mb-7">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl ">
          Welcome to Our River Photo Gallary
        </h1>
      </div>
      
      <div className="flex gap-5 mx-auto flex-wrap justify-center items-center">
        {/* 3D Card Section   */}

        {pic.river.map((picture) => (
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={picture.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      <BackgroundBeams />
      
    </div>
  );
}
