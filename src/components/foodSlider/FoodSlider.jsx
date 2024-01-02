import React, { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const FoodSlider = () => {
  // Initialize AOS on component mount
  React.useEffect(() => {
    AOS.init();
  }, []);
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(0);

  // Refs
  const contentRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const nameRef = useRef("");

  const sliderContent = [
    {
      img: "https://plus.unsplash.com/premium_photo-1664298604702-fa9094e2eba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Purrfect Health Supplies",
      description:
        "Your one-stop shop for high-quality health products, ensuring your cat's purrfection.",
    },
    {
      img: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Kitty Cuisine Corner",
      description:
        "Indulge your cat's taste buds with a delectable array of gourmet foods and nutritious treats",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1695267061085-0f7cfca592bd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Feline Essentials",
      description:
        "Elevate your cat's well-being with premium essentials for health, comfort, and joy.",
    },
  ];

  const Slide = (type) => {
    let local;
    if (type === "next") {
      local = active + 1;
      sliderContent.length - 1 < local ? setActive(0) : setActive(local);
    }
    if (type === "prev") {
      local = active - 1;
      local < 0 ? setActive(sliderContent.length - 1) : setActive(local);
    }
    setPrev(active);
  };

  useEffect(() => {
    contentRef.current.style.bottom = "-100%";
    prevRef.current.style.left = "-10%";
    nextRef.current.style.right = "-10%";
    setTimeout(() => {
      nameRef.current.innerText = sliderContent[active].name;
      contentRef.current.style.bottom = "0%";
      prevRef.current.style.left = "0%";
      nextRef.current.style.right = "0%";
    }, 1000);
  }, [active]);
  return (
    <div className="slider-body h-[500px] lg:h-screen">
      <div className="rounded-xl relative shadow-lg overflow-hidden">
        <div className="w-[400px] h-[400px] lg:w-[1280px] lg:h-[600px] relative">
          {sliderContent.map((slide, i) => {
            return (
              <img
                src={slide.img}
                key={i}
                alt="slideImg"
                className={`h-full w-full absolute object-cover inset-0 duration-[2.5s] ease-out transition-[clip-path] ${
                  i === active ? "clip-visible" : "clip-hidden"
                }`}
              />
            );
          })}
          <img
            src={sliderContent[prev].img}
            alt="previmg"
            className="w-full h-full  object-cover"
          />
        </div>
        <div>
          <button
            data-aos="fade-left"
            data-aos-duration="2000"
            id="back"
            ref={prevRef}
            onClick={() => Slide("prev")}
          >
            <ion-icon name="chevron-back-outline" size="large"></ion-icon>
          </button>
          <button
            data-aos="fade-right"
            data-aos-duration="2000"
            id="forward"
            ref={nextRef}
            className="right-0"
            onClick={() => Slide("next")}
          >
            <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
          </button>
        </div>
        <div className="content" ref={contentRef}>
          <h1 className="text-2xl font-bold" ref={nameRef}>
            {sliderContent[0].name}
          </h1>
          <p className="mt-1.5 text-sm;">
            {sliderContent[0].description}
            <Link to="/products">
              <span className="text-[#6cc7bb]">Read More</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodSlider;
