'use client'

import Image from "next/image";
import {useInView} from 'react-intersection-observer';
import {useEffect, useState} from 'react';
import {fetchAnime} from '@/app/action';
import {AnimeCard, AnimeProp} from '@/components';

let page = 2

export function LoadMore() {
  const {ref, inView} = useInView()
  const [data, setData] = useState<AnimeProp[]>([])

  useEffect(() => {
    if(inView) {
      fetchAnime(page, 8).then(res => {
        setData(value => [...value, ...res])

        page++
      })
    }
  }, [inView]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index}/>
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}
