"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [  //Here we bring images form unsplash.com ,means we load image from other server, not out local server. So here we add a domain in next.config.mjs .
  {
    "id": 1,
    "name": "Alice",
    designation: "abc",
    "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
  },
  {
    "id": 2,
    "name": "Bob",
    designation: "abc",
    "image": "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    "id": 3,
    "name": "Charlie",
    designation: "abc",
    "image": "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    "id": 4,
    "name": "Diana",
    designation: "abc",
    "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  }
]

export default function Third() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Our Community Guidance
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20 max-w-96">
      Join a photography community to share ideas, get feedback, and learn. Embrace diverse styles, respect differing opinions, and actively participate in discussions for mutual growth.
      </p>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
    </div>

  )
}