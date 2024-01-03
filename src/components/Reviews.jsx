import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// import backgroundImage from "../assets/images/tumblr_pcy6arSDZz1w3y4ilo1_r1_640.webp";
// import backgroundImage from "../assets/images/tumblr_pm9b8qdYph1w3y4ilo1_640.gif";
import backgroundImage from "/manda-hansen-p5lS8DT3tSQ-unsplash.jpg";
import Container from "./shared/Container";

const Reviews = () => {
  const reviews = [
    {
      _id: "1",
      name: "Nabila Afrin",
      image:
        "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/414131075_3591731141110080_8675657856963986206_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=jsln49o-atUAX8YFxdI&_nc_ht=scontent.fdac24-2.fna&oh=00_AfCSQkn14OWFOeo0FRhIFS1tqSRaD-nqHk_ObMkOD3mb4g&oe=6599A5B7",
      rating: 4,
      details:
        "products are original and the pricing is very reasonable, love the products, my kitten love it🥰❤",
    },
    {
      _id: "3",
      name: "Inkeyad Shanto",
      image:
        "https://scontent.fdac24-2.fna.fbcdn.net/v/t1.6435-9/82268412_3491533634253704_4171930372893835264_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7a1959&_nc_ohc=oEfsi1oWtFIAX8P9aJe&_nc_oc=AQnlZUn8_6-RVjQER-QM8Uzi36L67W9jlFkYIp6LuEyqEFnL5rvCkeANNtKcJIaWmmQ&_nc_ht=scontent.fdac24-2.fna&oh=00_AfBT-v_AZia2H09xvjS9rOdIG6ufjO85n8I-0t1llNHyog&oe=65BCCCA0",
      rating: 4.2,
      details:
        "They Provide decent services. Got some quality combo pack of food and gift items for my cat.  Very best wishes for Pet Paradise BD. 😊💖🖤",
    },
    {
      _id: "2",
      name: "Airy thoughts",
      image:
        "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/395783116_691582892956511_3779631618280656283_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=d3a18onlsjcAX_JS5cQ&_nc_ht=scontent.fdac24-1.fna&oh=00_AfDMi9xO61nIMiNbL0Xc-EIco2-TJ_xAlKXPR1e6TWKPQg&oe=65998365",
      rating: 3.5,
      details:
        "Fast delivery. I prefer this page to buy dry food, treats and collar for my meow!",
    },

    {
      _id: "4",
      name: "Maisha Mahjabin Mahi",
      image:
        "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/407831595_1601075437326900_4576720524150377587_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Gkyj9euYqQEAX9RQwmW&_nc_ht=scontent.fdac24-2.fna&oh=00_AfCNGBaSrLJ4ZxQV7YxhlvZgE6PGVjzsYLe_Y6QRwj14Pg&oe=659A71F3",
      rating: 3.7,
      details:
        "got a harness for my catto, it's really cute and the size is perfect. though i am not sure if my cat is as fond of it as I am. absolutely loved the service ❣️",
    },
    {
      _id: "5",
      name: "Esha Alam",
      image:
        "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/338665432_231219269398824_822368568609361393_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=pnwGrEgCEdkAX9srSmG&_nc_ht=scontent.fdac24-3.fna&oh=00_AfBreo8WSHDIf6t5ok71B58PicKQCt7q9KEbvufK7Zm5AA&oe=659A7DFE",
      rating: 4.7,
      details: "Love the product ❤️, its really nic and my cat loved it too ❤️",
    },
  ];

  return (
    <div
      className="bg-cover bg-center h-[600px] py-24 sm:py-28 md:py-28 lg:py-32 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="backdrop-blur-lg">
        <Container>
          <Swiper className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="flex flex-col items-center mx-24 mb-5 text-center">
                  <div className="avatar mt-10">
                    <div>
                      <img
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 2xl:w-36 2xl:h-36 rounded-full mb-5"
                        src={review.image}
                      />
                    </div>
                  </div>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                  <p className="py-8 text-gray-600">{review.details}</p>
                  <h3 className="text-2xl text-gray-600">{review.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    </div>
  );
};

export default Reviews;
