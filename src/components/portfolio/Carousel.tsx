"use client";

import { useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ITEM_NUMBER = 5;

export function Carousel({ items }: { items: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!Array.isArray(items) || items.length <= 0) {
    return null;
  }

  const length = items.length;

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === length - ITEM_NUMBER ? 0 : currentIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? length - ITEM_NUMBER : currentIndex - 1
    );
  };

  return (
    <div className="flex relative items-center justify-center">
      <IoIosArrowBack
        className="absolute text-lg text-slate-400 hover:text-slate-600 z-10 cursor-pointer -left-10"
        onClick={prevSlide}
      />

      <div className="flex min-w-full justify-center items-center overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className={`px-4 ${
              index >= currentIndex && index < currentIndex + ITEM_NUMBER
                ? "slide active"
                : "hidden"
            }`}
          >
            {index >= currentIndex && index < currentIndex + ITEM_NUMBER && (
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="text-4xl text-gray-500">{item.image}</div>

                <div className="text-xs text-gray-300">{item.name}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <IoIosArrowForward
        className="absolute text-lg text-slate-400 hover:text-slate-600 z-10 cursor-pointer -right-10"
        onClick={nextSlide}
      />
    </div>
  );
}
