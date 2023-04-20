import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArrSlider } from "../../ultis/funtions";
import * as actions from "../../store/actions";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const { banner } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //animation for banner
  useEffect(() => {
    const sliderElements = document.getElementsByClassName("slider-items");
    let min = 0,
      max = 2;

    const intervalId = setInterval(() => {
      const list = getArrSlider(min, max, sliderElements.length - 1);

      for (let i = 0; i < sliderElements.length; i++) {
        // Delete classnames (css)
        sliderElements[i]?.classList?.remove(
          "animate-slide-right",
          "order-last",
          "z-20"
        );
        sliderElements[i]?.classList?.remove(
          "animate-slide-left",
          "order-first",
          "z-10"
        );
        sliderElements[i]?.classList?.remove(
          "animate-slide-left2",
          "order-2",
          "z-10"
        );

        // Hide or Show images
        if (list.some((item) => item === i)) {
          sliderElements[i].style.cssText = `display: block`;
        } else {
          sliderElements[i].style.cssText = `display: none`;
        }
      }

      // Add animation by adding classnames
      list.forEach((item) => {
        if (item === max) {
          sliderElements[item]?.classList?.add(
            "animate-slide-right",
            "order-last",
            "z-20"
          );
        } else if (item === min) {
          sliderElements[item]?.classList?.add(
            "animate-slide-left",
            "order-first",
            "z-10"
          );
        } else {
          sliderElements[item]?.classList?.add(
            "animate-slide-left2",
            "order-2",
            "z-10"
          );
        }
      });
      min = min === sliderElements.length - 1 ? 0 : min + 1;
      max = max === sliderElements.length - 1 ? 0 : max + 1;
    }, 3000);

    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, []);

  const handleClickedBanner = (item) => {
    if (item.type === 1) {
      dispatch(actions.setCurrentSongId(item.encodeId));
      dispatch(actions.play(true))
      dispatch(actions.setPlaylist(null))
    } else if (item.type === 4) {
      const albumPath = item?.link.split('.')[0];
      navigate(albumPath, {state: { playAlbum: true }})
    } else {
      dispatch(actions.setPlaylist(null))
    }
  };
  return (
    <div className="flex w-full gap-7 overflow-hidden pt-8">
      {banner?.map((item, index) => {
        return (
          <img
            key={item.encodeId}
            src={item.banner}
            alt="banner"
            onClick={() => handleClickedBanner(item)}
            className={`slider-items flex-1 object-contain w-[30%] cursor-pointer rounded-lg ${index <= 2 ? "block" : "hidden"}`}
          />
        );
      })}
    </div>
  );
};

export default Slider;
