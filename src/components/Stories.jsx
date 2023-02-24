import React from "react";
import Title from "./Utils/Title";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
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
                  <img src={val.img} alt="" />
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
