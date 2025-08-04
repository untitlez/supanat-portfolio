"use client";

import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const certificate = [
  {
    name: "Skooldio",
    course: "Intro to User Experience Design",
    src: "/certificate/skiooldio-ux.png",
    link: "https://drive.google.com/file/d/1VxGgHhE2hzkckt08JpJ48Y3PeuSet0g6/view",
  },
  {
    name: "Skooldio",
    course: "UI Fundamentals",
    src: "/certificate/skiooldio-ui.png",
    link: "https://drive.google.com/file/d/1FyC4LN7cV_tuQ_NITOceigykR-PHO5oB/view",
  },
  {
    name: "Coursera",
    course: "Meta Front-End Developer",
    src: "/certificate/meta-frontend.png",
    link: "https://drive.google.com/file/d/10Yn_g7PJhT4UfYPUe0VOpOFk2_9Hg4YF/view",
  },
  {
    name: "Coursera",
    course: "Microsoft Front-End Developer",
    src: "/certificate/microsoft-frontend.png",
    link: "https://drive.google.com/file/d/1VHAomSkhg1aGD8xwpt6QtyE7r5xOWUgj/view",
  },
  {
    name: "Udemy",
    course: "The Complete Full-Stack Web Development",
    src: "/certificate/udemy-fullstack.png",
    link: "https://drive.google.com/file/d/1TOAeIx_m6Df1-2616dIUw3fAGHC4_wNx/view",
  },
];

export default function Certificate() {
  const [count, setCount] = useState();
  const [current, setCurrent] = useState(0);

  const handleChange = () => {
    setCurrent(count.selectedScrollSnap() + 1);
    count.on("select", () => {
      setCurrent(count.selectedScrollSnap() + 1);
    });
  };

  useEffect(() => {
    if (!count) return;
    handleChange();
  }, [count]);

  return (
    <div className="lg:min-h-screen grid place-items-center">
      <Carousel
        className="sm:w-3/4 lg:w-full lg:max-w-screen-sm bg-base-100 rounded-3xl p-6 border border-base-content/50 shadow-xl"
        setApi={setCount}
      >
        <CarouselContent>
          {certificate.map((item, index) => (
            <CarouselItem key={index}>
              <div className="aspect- flex flex-col justify-center items-center">
                <img
                  src={item.src}
                  alt={item.name}
                  className="object-contain rounded-xl hover:cursor-grab active:cursor-grabbing shadow-md"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="w-full mt-5 flex justify-center gap-2 relative">
          {certificate.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index + 1 === current ? "bg-base-content" : "bg-base-content/30"
              }`}
            />
          ))}
        </div>
        <div className="hidden sm:block">
          <CarouselPrevious className="border border-base-content" />
          <CarouselNext className="border border-base-content" />
        </div>
      </Carousel>
    </div>
  );
}
