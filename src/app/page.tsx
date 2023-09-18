"use client";

import Image from "next/image";
import BannerDev from "@/assets/images/bannerDev.jpg";
import TextAboutMe from "@/components/TesxtAboutMe";
import Specialties from "@/components/Specialties";
import Projects from "@/components/Project";
import CallToAction from "@/components/CallToAction";
import HighLights from "@/components/HighLights";
import FeedBack from "@/components/FeedBack";
import Advantage from "@/components/Advantage";

export default function Home() {
  return (
    <>
    <main>
      <div className="w-full">
        <Image
          src={BannerDev}
          alt="SideBar"
          className="object-cover w-full h-[560px]"
        />
      </div>
      <TextAboutMe />
      <Specialties />
      <Projects />
      <CallToAction />
      <HighLights />
      <FeedBack />
      <Advantage />
    </main>
    </>
    
  )
}
