"use client";

import Image from "next/image";
import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

type Props = {
  images: string[];
};

export default function ImageGallery({ images }: Props) {
  const [active, setActive] = useState(0);
  const setSlide = (i: number) => {
    if (i === 1) {
      if (active === images.length - 1) setActive(0);
      else setActive(active + 1);
    } else {
      if (active === 0) setActive(images.length - 1);
      else setActive(active - 1);
    }
  };

  return (
    <>
      <div className="relative mx-auto max-w-[50%] border-2 border-black">
        {images.map((img, i) => (
          <div
            key={i}
            id={`img_${i}`}
            className={active === i ? "block" : "hidden"}
          >
            <Image width={800} height={800} src={img} alt="gallery" />
          </div>
        ))}

        <BsFillArrowLeftCircleFill
          className="absolute left-[-60px] top-[40%] cursor-pointer text-4xl"
          onClick={() => setSlide(-1)}
        />
        <BsFillArrowRightCircleFill
          className="absolute right-[-60px] top-[40%]  cursor-pointer text-4xl"
          onClick={() => setSlide(1)}
        />

        {/* Thumbnails */}
        <div className="flex flex-row border-t-2 border-black">
          {images.map((img, i) => (
            <div key={i} className="">
              <Image
                className="cursor-pointer"
                width={160}
                height={160}
                src={img}
                alt="gallery"
                onClick={() => setActive(i)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
