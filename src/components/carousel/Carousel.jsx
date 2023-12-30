import React from "react";
import "./Carousel.css";

const Carousel = () => {
  const items = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1677545182067-26ac518ef64f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "LUNDEV",
      description:
        "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "LUNDEV",
      description:
        "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
    },
    {
      image:
        "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "LUNDEV",
      description:
        "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfHwwfHx8MA%3D%3D",
      name: "LUNDEV",
      description:
        "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1677101221533-52b45823a2dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fHww",
      name: "LUNDEV",
      description:
        "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
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
              <button>See more</button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handlePrevClick}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button id="next" onClick={handleNextClick}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
