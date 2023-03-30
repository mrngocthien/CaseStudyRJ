import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getArrSlider } from "../ultis/funtions";

const Slider = () => {
  const { banner } = useSelector((state) => state.app);
  console.log(banner);

  useEffect(() => {
    const sliderElements = document.getElementsByClassName("slider-items");
    let min = 0,
      max = 2;

    const intervalId = setInterval(() => {
      const list = getArrSlider(min, max, sliderElements.length);
      for (let i = 0; i < sliderElements.length; i++) {
        if (list.some((item) => item === i)) {
          (sliderElements[i].style.cssText = `display: none`)
        } else {
          (sliderElements[i].style.cssText = `display: block`)
        }
      }
      if (min < 5 || max < 5) {
        min += 1;
        max += 1;
      }
      if (min === sliderElements.length) {
        min = 0;
      }
      if (max === sliderElements.length) {
        max = 0;
      }
      console.log(list);
    }, 1000);
    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="flex w-full gap-7 overflow-hidden px-[59px] pt-8">
      {banner?.map((item) => {
        return (
          <img
            key={item.encodeId}
            src={item.banner}
            alt="banner"
            className="slider-items flex-1 object-contain rounded-lg w-2/5 transition-all"
          />
        );
      })}
    </div>
  );
};

export default Slider;
