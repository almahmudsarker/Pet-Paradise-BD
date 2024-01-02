import React from "react";
import "./Carousel.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Carousel = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  const items = [
    {
      image:
        "https://images.unsplash.com/photo-1460572894071-bde5697f7197?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Grouchy Persian cat",
      description:
        "Grouchy Persian cat: Fussy fluff with a disdainful stare, demands regal treatment, disapproves playfully.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1480363494744-a47653fab100?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Tasty Morsel",
      description:
        "Tasty Morsel: Delectable bite-sized delight, tempts taste buds with irresistible flavors and culinary bliss.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503431128871-cd250803fa41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Kylo Ren",
      description:
        "Kylo Ren: Brooding and conflicted antagonist in the Star Wars saga, struggles with the pull of both the light and dark sides of the Force",
    },
    {
      image:
        "https://images.unsplash.com/photo-1456796148441-485386946471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Grey cat yawning",
      description:
        "Yawning: Involuntary reflex indicating tiredness or boredom, often accompanied by a deep inhalation and stretching of the jaw muscles",
    },
    {
      image:
        "https://images.unsplash.com/photo-1541840524505-3d825592d8ac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Fire-eyed cat",
      description:
        "Fire-eyed cat: Feline with captivating azure eyes, a mesmerizing and rare trait, adding to its unique and charming appearance",
    },
    {
      image:
        "https://images.unsplash.com/photo-1498100152307-ce63fd6c5424?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Hunger",
      description:
        "Hunger: The intense, physiological drive for nourishment, triggering a range of sensations and prompting the search for satisfying sustenance",
    },
  ];

  const handleNextClick = () => {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").appendChild(lists[0]);
  };

  const handlePrevClick = () => {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
  };

  return (
    <div className="container">
      <div id="slide">
        {items.map((item, index) => (
          <div
            className="item"
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.description}</div>
              {/* <button>See more</button> */}
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button
          data-aos="fade-left"
          data-aos-duration="1000"
          id="prev"
          onClick={handlePrevClick}
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button
          data-aos="fade-right"
          data-aos-duration="1000"
          id="next"
          onClick={handleNextClick}
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
