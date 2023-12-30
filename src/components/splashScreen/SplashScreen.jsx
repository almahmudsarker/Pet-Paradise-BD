import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

const SplashScreen = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const logoSpan = document.querySelectorAll(".logo");

    const animateLogo = () => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add("active");
        }, (idx + 1) * 400);
      });

      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove("active");
            span.classList.add("fade");
          }, (idx + 1) * 50);
        });
      }, 2000);

      setTimeout(() => {
        setAnimationComplete(true);
      }, 2300);
    };

    animateLogo();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("DOMContentLoaded", animateLogo);
    };
  }, []);

  return (
    <div
      className={`intro ${animationComplete ? "fade-out" : ""}`}
      style={{
        top: animationComplete ? "fade-out" : "0",
        backgroundColor: "#fff",
        zIndex: animationComplete ? -1 : 100,
      }}
    >
      <h1 className="logo-header ">
        <span className="logo">PET </span>
        <span className="logo">PARADISE </span>
        <span className="logo">BD.</span>
      </h1>
    </div>
  );
};

export default SplashScreen;
