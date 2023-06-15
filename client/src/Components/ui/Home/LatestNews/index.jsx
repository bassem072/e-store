import React from 'react'
import img1 from "../../../../assets/images/news/1.jpg";
import img2 from "../../../../assets/images/news/2.jpg";
import img3 from "../../../../assets/images/news/3.jpg";
import img4 from "../../../../assets/images/news/4.jpg";
import News from './News';

export default function LatestNews() {
  const news = [img1, img2, img3, img4, img1];
  return (
    <div className="w-full flex flex-col pb-10">
      <div className="w-full flex items-center gap-3 whitespace-nowrap py-5 pb-10">
        <div className="text-3xl font-bold">Latest News</div>
        <div className="w-full h-px bg-slate-300"></div>
        <button className="py-2 px-5 bg-primary rounded-full text-white">
          View All
        </button>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-5 gap-y-10">
        {
          news.map((item, key) => <News key={key} item={item} />)
        }
      </div>
    </div>
  );
}
