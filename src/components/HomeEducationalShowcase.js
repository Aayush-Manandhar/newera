import Students from '@/images/computer_learning_student.jpeg';
import Blackboard from '@/images/blackboard.jpeg';
import Board from '@/images/board.jpeg';
import Learning from '@/images/learning_computer.jpg';

import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import { Card } from "@/components/ui/card";

const InsightCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const images = [
    {
      src: Students,
      alt: "Students working on laptops in a library"
    },
    {
      src: Blackboard,
      alt: "Scientists working in a laboratory"
    },
    {
      src: Board,
      alt: "Students in a study group discussion"
    },
    {
      src: Learning,
      alt: "Innovation wall with creative ideas"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 py-8">
      {/* Header Section */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-lg font-medium text-zinc-600 dark:text-zinc-400 mb-2 tracking-wide">SEE FOR YOURSELF</h2>
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300">
          Insight Into New Era
        </h1>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block w-full max-w-[1400px] mx-auto px-4">
        <div className="flex gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="flex-1 relative group perspective-1000"
            >
              <Card className="overflow-hidden transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image.src}
                    height={533}
                    width={800}
                    alt={`Insight ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Carousel View */}
      <div className="md:hidden w-full max-w-[95%] mx-auto">
        <Carousel 
          className="w-full relative"
          value={activeIndex}
          onChange={setActiveIndex}
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%]">
                <Card className="overflow-hidden group cursor-pointer">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={image.src}
                      height={533}
                      width={800}
                      alt={`Insight ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious 
            className="w-12 h-12 rounded-full bg-white/80 dark:bg-slate-800/80 
            backdrop-blur-sm border border-slate-200 dark:border-slate-700
            hover:bg-white dark:hover:bg-slate-800
            hover:scale-110 hover:shadow-lg
            transition-all duration-300
            absolute -left-4 top-1/2 -translate-y-1/2 translate-x-2 z-10"
          >
          </CarouselPrevious>
          
          <CarouselNext 
            className="w-12 h-12 rounded-full bg-white/80 dark:bg-slate-800/80 
            backdrop-blur-sm border border-slate-200 dark:border-slate-700
            hover:bg-white dark:hover:bg-slate-800
            hover:scale-110 hover:shadow-lg
            transition-all duration-300
            absolute -right-4 top-1/2 -translate-y-1/2 -translate-x-2 z-10"
          >
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
};

export default InsightCarousel;