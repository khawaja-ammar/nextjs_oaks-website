"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  images: string[];
};

export default function ClientsImages({ images }: Props) {
  const len = images.length;
  const myIterator = useRef(0);
  const [iterator, setIterator] = useState(0);
  const getIndexes = (i: number, count: number) => {
    const vals = [];

    while (count) {
      if (i === images.length) {
        i = 0;
      }
      vals.push(i);
      i++;
      count--;
    }
    return vals;
  };

  const [gallery, setGallery] = useState(getIndexes(0, 4));

  useEffect(() => {
    setGallery(getIndexes(iterator, 4));
  }, [iterator]);

  useEffect(() => {
    setInterval(() => {
      if (myIterator.current >= len - 1) {
        myIterator.current = 0;
        setIterator(0);
      } else {
        myIterator.current = myIterator.current + 1;
        setIterator(myIterator.current);
      }
    }, 2000);
  }, []);

  return (
    <div className="overflow-hidden px-12 py-8">
      <div className="flex h-12 justify-center gap-8 md:h-20">
        {gallery.map((img, i) => (
          <img src={images[img]} className="" key={i} />
        ))}
      </div>
    </div>
  );
}
