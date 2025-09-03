"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FileText } from "lucide-react";

import { Header } from "@/components/Header";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
    <div className="lg:min-h-screen flex flex-col place-items-center">
      <Header label="certificate" />

      {/* Mobile  */}
      <Carousel
        className="w-full lg:hidden max-w-screen-sm bg-base-100 rounded-3xl p-6 border border-base-content/50 shadow-xl"
        setApi={setCount}
      >
        <CarouselContent>
          {certificate.map((item, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col justify-center items-center">
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
          <CarouselPrevious className="bg-base-100 border border-base-content" />
          <CarouselNext className="bg-base-100 border border-base-content" />
        </div>
      </Carousel>

      {/* Desktop  */}
      <div className="hidden lg:grid gap-8 grid-cols-3">
        {certificate.map((item, index) => (
          <Card
            key={index}
            className="content-center bg-base-100 border-base-content/50 rounded-3xl shadow-xl hover:shadow-base-content/20 animate"
          >
            <CardHeader>
              <Dialog>
                <DialogTrigger>
                  <img
                    src={item.src}
                    alt={item.name}
                    className="object-contain rounded-xl hover:scale-105 animate"
                  />
                </DialogTrigger>
                <DialogContent className="bg-base-100 border-base-content/50 max-w-min ">
                  <DialogHeader className="items-center">
                    <DialogTitle className="text-base-content">
                      {item.course}
                    </DialogTitle>
                    <DialogDescription>{item.name}</DialogDescription>
                  </DialogHeader>
                  <div className="relative aspect-video h-[50vh]">
                    <Image
                      src={item.src}
                      alt={item.name}
                      className="object-contain"
                      sizes="100vw"
                      fill
                    />
                  </div>
                  <div className="flex justify-center mt-2">
                    <a
                      className="btn btn-outline btn-wide capitalize"
                      href={item.link}
                      target="_blank"
                    >
                      <FileText className="size-5" />
                      view
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardFooter className="justify-center">
              {item.course} - {item.name}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
