"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";

export default function Second() {
  return (
    // <section className="w-[100%] h-[100vh]">
      <div className=" p-3 flex flex-col h-auto">
        <div className="text-center mb-7">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl ">Importance of Photography</h1>
        </div>

        <div className="flex flex-wrap gap-6  justify-center">
          <BackgroundGradient className="min-h-52 rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Preservation of Memories
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Photography captures and preserves personal and historical
              moments, allowing us to relive and remember significant events.
            </p>
          </BackgroundGradient>

          <BackgroundGradient className=" rounded-[22px] min-h-52 max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Storytelling and Communication
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Through images, photography conveys powerful stories, emotions,
              and messages, often transcending language barriers.
            </p>
          </BackgroundGradient>

          <BackgroundGradient className="min-h-52 rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Artistic Expression
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Photography serves as a medium for artistic expression, enabling
              photographers to explore and showcase their creativity and unique
              perspectives.
            </p>
          </BackgroundGradient>

          <BackgroundGradient className="min-h-52 rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Documentation and Evidence
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Photography provides documentation and evidence of various
              phenomena, from scientific discoveries to social issues, aiding in
              research and raising awareness.
            </p>
          </BackgroundGradient>

          <BackgroundGradient className="min-h-52 rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Cultural and Historical Record
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              It creates a visual record of cultures, traditions, and historical
              events, helping to understand and preserve heritage for future
              generations.
            </p>
          </BackgroundGradient>
        </div>
      </div>
    // </section>
  );
}
