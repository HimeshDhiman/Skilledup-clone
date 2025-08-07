import React from "react";
import { SkiperCard } from "../ui/skiper-card";
import card4 from "/public/images/card4.avif";
import card5 from "/public/images/card5.avif";
import card6 from "/public/images/card6.avif";
import card7 from "/public/images/card7.avif";
import card8 from "/public/images/card8.avif";
import card9 from "/public/images/card9.avif";


import { cn } from "@/lib/utils";
import BadgeButton from "../ui/badge-button";
import { TextScroll } from "../ui/text-scroll";
import { div } from "framer-motion/client";

const SpecialCard = () => {
  return (

<div className="p-6 rounded-2xl shadow-[0_0_20px_#00000033] dark:shadow-[0_0_20px_#ffffff33] bg-background dark:bg-[#121212] ">
    <div className="my-20 ">


       
      <h4 className="text-foreground text-opacity-80  dark:text-white  text-center font-bold text-6xl mt-12 mb-8">
        Aapke Sapno Ka Shortcut - skilledUp 
      </h4>
     
      <div className="w-[61.5%] mx-auto ">
        <BadgeButton>Component Preview</BadgeButton>
        <SkiperCard
          title="Turning Ambitions into
          Realities!"
          description="Are You Ready? 🤌"
          step1img1Class={cn(
            "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
            "left-1/4 top-[57%] rounded-[24px] max-md:scale-[160%] max-md:rounded-[24px] md:left-[35px] md:top-[29%]",
            "md:group-hover:translate-y-2"
          )}
          step1img2Class={cn(
            "pointer-events-none w-3/5 overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
            "left-[69%] top-[53%] rounded-2xl max-md:scale-[160%] max-md:rounded-[24px] md:left-[calc(50%+35px+1rem)] md:top-[21%]",
            "md:group-hover:-translate-y-6 "
          )}
          step2img1Class={cn(
            "pointer-events-none w-[50%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
            "left-1/4 top-[69%] max-md:scale-[160%] md:left-[35px] md:top-[30%]",
            "md:group-hover:translate-y-2"
          )}
          step2img2Class={cn(
            "pointer-events-none w-2/5 overflow-hidden rounded-2xl rounded-t-[24px] border border-stone-100/10 transition-all duration-500 group-hover:-translate-y-6 dark:border-stone-700",
            "left-[70%] top-[53%] max-md:scale-[140%] md:left-[calc(50%+27px+1rem)] md:top-1/4",
            "md:group-hover:-translate-y-6"
          )}
          step3imgClass={cn(
            "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
            "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
          )}
          step4imgClass={cn(
            "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
            "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
          )}
         
          image={{
            step1light1: card4,
            step1light2: card5,
            step2light1: card6,
            step2light2: card7,
            step3light: card8,
            step4light: card8,

            alt: "something",
          }}
        />
      </div>
    </div>
    </div>


    
  );
};

export default SpecialCard;
