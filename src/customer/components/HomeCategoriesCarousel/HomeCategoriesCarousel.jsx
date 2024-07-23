import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import Home
// import HomeSectionData from './HomeSectionData';
import ItemCard from "./ItemCard";
import Button from "@mui/material/Button";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const HomeCategoriesCarousel = ({arrayData, categoryName}) => {
  const [firstIndex, setFirstIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5, itemsFit: "contain" },
  };

  const PrevSlide = () => setFirstIndex(firstIndex - 1);
  const NextSlide = () => setFirstIndex(firstIndex + 1);

  const syncFirstIndex = ({ firstIndex }) => setFirstIndex(firstIndex);
  const categoriesData = arrayData.slice(firstIndex,10).map((unit) => <ItemCard product={unit} />);
  return (
    // categoriesData = HomeSectionData.map((unit) => <ItemCard unit /> )
    <div className="flex flex-col flex-start ">
      <h2 className="ml-10 Roboto text-black text-left w-full relative text-2xl border-b-6 p-4 font-bold">{categoryName}</h2>
      <div className=" m-1 px-11 overflow-auto hide-scrollbar space-x-3 relative ">
        <AliceCarousel
          mouseTracking
          items={categoriesData}
          disableDotsControls
          disableButtonsControls
          // autoPlay={true}
          // autoPlayInterval={2000}
          // autoWidth
          // mouseTracking={true}
          // renderPrevButton={true}
        //   infinite
          responsive={responsive}
          controlsStrategy="alternate"
          onSlideChanged={syncFirstIndex}
          firstIndex={firstIndex}
        />
        {firstIndex !== 0 && (
          <Button
            onClick={PrevSlide}
            className="z-50 "
            sx={{ position: "absolute", top: "12rem", left: "0rem" }}
          >
            <ArrowLeftIcon sx={{ color: "black" }} />
          </Button>
        )}
        {firstIndex <= categoriesData.length - 5 && (
          <Button
            onClick={NextSlide}
            className=" z-50"
            sx={{ position: "absolute", top: "12rem", right: "0rem" }}
          >
            <ArrowRightIcon sx={{ color: "black" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeCategoriesCarousel;
