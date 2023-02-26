import React from "react";
import Title from "./Utils/Title";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css"
import {  HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import {ClockIcon} from "@heroicons/react/24/outline"
const Stories = ({ story: { title, news } }) => {
  return (
    <>
      <div className="nike-container mb-11">
        <Title title={title} />
      </div>
      <div>
        <Splide>
          {news.map((val, i) => (
            <SplideSlide key={i} className="mb-0.5">
              <div>
                <div>
                  <img src={val.img} alt={`img/story/${i}`} className="" />
                </div>
                <div>
                    <div>
                        <HeartIcon className="icon-style"/><span>{val.like}</span>
                    </div>
                    <div> <ClockIcon className="icon-style"/><span>{val.time}</span> </div>
                    <div> <HashtagIcon className="icon-style"/><span>{val.by}</span> </div>
                </div>
                <div>
                  <h1>{val.title}</h1>
                  <p>{val.text}</p>
                </div>
                <div>
                  <a href={val.url}>{val.btn}</a>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default Stories;
