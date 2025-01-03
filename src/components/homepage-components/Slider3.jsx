import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import carouselImg from "../../assets/shopcards/slider2.png";
import carouselImg2 from "../../assets/shopcards/slider2.png";

const Slider3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slides = [
    {
      url: "./assets/shopcards/slider2.png",
    },
    {
      url: "./assets/shopcards/slider2.png",
    },
  ];

  return (
    <div>
      <div className="flex w-full bg-green2">
        <div className="max-h-[716px] w-full h-screen mx-auto relative group ">
          <div
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
              backgroundPosition: "top", // Resmi dikey ve yatay olarak ortala
              backgroundSize: "cover", // Resmi ekran boyutuna sığacak şekilde boyutlandır
              backgroundRepeat: "no-repeat", // Resmin tekrarlanmasını engelle
            }}
            className="w-full h-full bg-cover bg-no-repeat duration-500 flex items-center justify-center"
          >
            <div className="flex max-h-[680px] w-full h-full items-center px-40 ">
              <div className="flex flex-col gap-8 md:items-center md:mx-auto drop-shadow-2xl">
                <h5 className="font-bold text-white ">Summer 2020</h5>
                <h1 className="flex font-bold text-6xl text-white md:max-w-80 md:text-[40px] md:flex-col md:text-center">
                  NEW COLLECTION
                </h1>
                <p className="flex flex-col text-white font-bold max-w-80 md:flex-col md:items-center">
                  <span> We know how large objects will act,</span>
                  but things on a small scale.
                </p>
                <div className="flex justify-start ">
                  <Link
                    to="/shop"
                    className="text-white font-bold text-xl bg-[#2DC071] p-4 rounded-md"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>

              <div className="flex gap-1 absolute top-[95%] left-[50%] md:left-[34.5%] translate-y-[-150%] justify-center ">
                {slides.map((img, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        currentIndex === index
                          ? "bg-white w-[62px] h-[10px] "
                          : "w-[62px] h-[10px] bg-white opacity-[60%] cursor-pointer"
                      }
                      onClick={() => goToSlide(index)}
                    />
                  );
                })}
              </div>
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2  text-white cursor-pointer md:left-0">
                <FontAwesomeIcon
                  icon={faChevronCircleLeft}
                  size="2xl"
                  onClick={prevSlide}
                />
              </div>
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  text-white cursor-pointer md:right-0">
                <FontAwesomeIcon
                  icon={faChevronCircleRight}
                  size="2xl"
                  onClick={nextSlide}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider3;
