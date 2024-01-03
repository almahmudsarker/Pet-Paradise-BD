import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../../components/shared/Container";
import Footer from "../../components/Footer";

const Products = () => {
  const [showMoreFeline, setShowMoreFeline] = useState(false);
  const [showMorePurrfect, setShowMorePurrfect] = useState(false);
  const [showMoreKitty, setShowMoreKitty] = useState(false);
  const [cart, setCart] = useState([]);

  const felineEssentialsProducts = [
    {
      id: 1,
      name: "Premium Cat Bed",
      description: "Luxurious bed for your feline friend.",
      image:
        "https://images.unsplash.com/photo-1516750105099-4b8a83e217ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fFByZW1pdW0lMjBDYXQlMjBCZWR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Cat Carrier",
      description: "Comfortable carrier for your cat.",
      image:
        "https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Cat Litter Box",
      description: "Easy-to-clean litter box for your cat.",
      image:
        "https://images.unsplash.com/photo-1587896046517-d8154a1e633c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Cat Scratching Post",
      description: "Durable scratching post for your cat.",
      image:
        "https://images.unsplash.com/photo-1615678857339-4e7e51ce22db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2F0JTIwTGl0dGVyJTIwQm94fGVufDB8fDB8fHww",
    },
    {
      id: 5,
      name: "Cat Tree",
      description: "Fun and exciting cat tree for your cat.",
      image:
        "https://images.unsplash.com/photo-1602580404312-82db1079069d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2F0JTIwTGl0dGVyJTIwQm94fGVufDB8fDB8fHww",
    },
    {
      id: 6,
      name: "Cat Toy",
      description: "Interactive toy for your cat.",
      image:
        "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2F0JTIwTGl0dGVyJTIwQm94fGVufDB8fDB8fHww",
    },
    {
      id: 7,
      name: "Cat Treats",
      description: "Delicious treats for your cat.",
      image:
        "https://images.unsplash.com/photo-1517451330947-7809dead78d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2F0JTIwTGl0dGVyJTIwQm94fGVufDB8fDB8fHww",
    },
    {
      id: 8,
      name: "Cat Water Fountain",
      description: "Water fountain for your cat.",
      image:
        "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 9,
      name: "Catnip",
      description: "Catnip for your cat.",
      image:
        "https://images.unsplash.com/photo-1512528368222-38761bbe68dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 10,
      name: "Collar",
      description: "Collar for your cat.",
      image:
        "https://images.unsplash.com/photo-1583083527882-4bee9aba2eea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 11,
      name: "Food Bowl",
      description: "Food bowl for your cat.",
      image:
        "https://images.unsplash.com/photo-1506755855567-92ff770e8d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 12,
      name: "Grooming Kit",
      description: "Grooming kit for your cat.",
      image:
        "https://images.unsplash.com/photo-1522526469673-5b73aed892ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 13,
      name: "Harness",
      description: "Harness for your cat.",
      image:
        "https://images.unsplash.com/photo-1555078243-f044dcc0cd4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 14,
      name: "Litter Mat",
      description: "Litter mat for your cat.",
      image:
        "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 15,
      name: "Litter Scoop",
      description: "Litter scoop for your cat.",
      image:
        "https://images.unsplash.com/photo-1601758066440-cbfc06a82914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 16,
      name: "Nail Clippers",
      description: "Nail clippers for your cat.",
      image:
        "https://images.unsplash.com/photo-1496284427489-f59461d8a8e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 17,
      name: "Nail Clippers max",
      description: "Nail clippers for your cat.",
      image:
        "https://images.unsplash.com/photo-1508112454086-9a507dc91f73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    // Add more products as needed
  ];

  const purrfectHealthSuppliesProducts = [
    {
      id: 1,
      name: "Vitamin Boost",
      description: "Nutritional supplements for your cat's health.",
      image:
        "https://images.unsplash.com/photo-1516750105099-4b8a83e217ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fFByZW1pdW0lMjBDYXQlMjBCZWR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Flea and Tick Prevention",
      description: "Flea and tick prevention for your cat.",
      image:
        "https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Dental Care",
      description: "Dental care products for your cat.",
      image:
        "https://images.unsplash.com/photo-1587896046517-d8154a1e633c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Hairball Control",
      description: "Hairball control products for your cat.",
      image:
        "https://images.unsplash.com/photo-1615678857339-4e7e51ce22db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2F0JTIwTGl0dGVyJTIwQm94fGVufDB8fDB8fHww",
    },
    {
      id: 5,
      name: "Joint Care",
      description: "Joint care products for your cat.",
      image:
        "https://images.unsplash.com/photo-1602580404312-82db1079069d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2F0JTIwTGl0dGVyJTIwQm94fGVufDB8fDB8fHww",
    },
    {
      id: 6,
      name: "Skin and Coat Care",
      description: "Skin and coat care products for your cat.",
      image:
        "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2F0JTIwTGl0dGVyJTIwQm94fGVufDB8fDB8fHww",
    },
    {
      id: 7,
      name: "Stress and Anxiety Relief",
      description: "Stress and anxiety relief products for your cat.",
      image:
        "https://images.unsplash.com/photo-1517451330947-7809dead78d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2F0JTIwTGl0dGVyJTIwQm94fGVufDB8fDB8fHww",
    },
    {
      id: 8,
      name: "Vitamins and Supplements",
      description: "Vitamins and supplements for your cat.",
      image:
        "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 9,
      name: "Wormers",
      description: "Wormers for your cat.",
      image:
        "https://images.unsplash.com/photo-1512528368222-38761bbe68dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    // Add more products as needed
  ];

  const kittyToysProducts = [
    {
      id: 1,
      name: "Gourmet Salmon Treats",
      description: "Delicious salmon-flavored treats for your cat.",
      image:
        "https://images.unsplash.com/photo-1516750105099-4b8a83e217ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fFByZW1pdW0lMjBDYXQlMjBCZWR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Gourmet Tuna Treats",
      description: "Delicious tuna-flavored treats for your cat.",
      image:
        "https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Gourmet Chicken Treats",
      description: "Delicious chicken-flavored treats for your cat.",
      image:
        "https://images.unsplash.com/photo-1587896046517-d8154a1e633c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Gourmet Beef Treats",
      description: "Delicious beef-flavored treats for your cat.",
      image:
        "https://images.unsplash.com/photo-1602580404312-82db1079069d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2F0JTIwTGl0dGVyJTIwQm94fGVufDB8fDB8fHww",
    },
    {
      id: 5,
      name: "Gourmet Turkey Treats",
      description: "Delicious turkey-flavored treats for your cat.",
      image:
        "https://images.unsplash.com/photo-1517451330947-7809dead78d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2F0JTIwTGl0dGVyJTIwQm94fGVufDB8fDB8fHww",
    },
    {
      id: 6,
      name: "Gourmet Duck Treats",
      description: "Delicious duck-flavored treats for your cat.",
      image:
        "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 7,
      name: "Gourmet Lamb Treats",
      description: "Delicious lamb-flavored treats for your cat.",
      image:
        "https://images.unsplash.com/photo-1583083527882-4bee9aba2eea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 8,
      name: "Gourmet Rabbit Treats",
      description: "Delicious rabbit-flavored treats for your cat.",
      image:
        "https://images.unsplash.com/photo-1522526469673-5b73aed892ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 9,
      name: "Gourmet Venison Treats",
      description: "Delicious venison-flavored treats for your cat.",
      image:
        "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 10,
      name: "Gourmet Kangaroo Treats",
      description: "Delicious kangaroo-flavored treats for your cat.",
      image:
        "https://images.unsplash.com/photo-1512528368222-38761bbe68dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhdCUyMExpdHRlciUyMEJveHxlbnwwfHwwfHx8MA%3D%3D",
    },
    // Add more products as needed
  ];

  // Function to handle adding a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to handle "Show More" button click
  const handleShowMore = (category) => {
    // Existing code...
    switch (category) {
      case "feline":
        setShowMoreFeline(true);
        break;
      case "purrfect":
        setShowMorePurrfect(true);
        break;
      case "kitty":
        setShowMoreKitty(true);
        break;
      default:
        break;
    }
    // Reset the cart when showing more products
    setCart([]);
  };

  AOS.init();

  // Placeholder for Product Card Component
  const ProductCard = ({ id, name, description, image }) => (
    <div
      className="product-card relative overflow-hidden rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
      data-aos="fade-up"
    >
      <img
        src={image}
        alt={name}
        className="object-cover w-full h-40 md:h-56 lg:h-64"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <button
          className="bg-black px-4 py-2 text-white rounded-full hover:bg-gray-800"
          onClick={() => addToCart({ id, name, description, image })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );

  // Cart Component
  const Cart = () => (
    <div className="cart">
      {cart.map((item) => (
        <div
          key={item.id}
          className="cart-item p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <img
            src={item.image}
            alt={item.name}
            className="cart-item-image w-16 h-16 object-cover rounded-md"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="w-full h-screen py-20">
        <Container>
          <h1 className="text-center text-5xl font-semibold mb-8 hero-text-gradient">
            Products
          </h1>
          <p className="text-xl mb-8 text-center text-gray-500">
            World class products for your feline friend.
          </p>
          {/* Display Cart */}
          {/* <Cart cart={cart} /> */}

          {/* Feline Essentials */}
          <h2 className="text-3xl font-semibold mb-6">Feline Essentials</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Display the first 8 products */}
            {felineEssentialsProducts
              .slice(0, showMoreFeline ? 16 : 8)
              .map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
          </div>
          {/* Show More Button */}
          {!showMoreFeline && felineEssentialsProducts.length > 8 && (
            <button
              className="bg-blue-900 text-white py-2 px-4 my-12 rounded mx-auto block"
              onClick={() => handleShowMore("feline")}
            >
              Show More
            </button>
          )}

          {/* Purrfect Health Supplies */}
          <h2 className="text-3xl font-semibold mb-6 mt-12">
            Purrfect Health Supplies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Display the first 8 products */}
            {purrfectHealthSuppliesProducts
              .slice(0, showMorePurrfect ? 16 : 8)
              .map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
          </div>
          {/* Show More Button */}
          {!showMorePurrfect && purrfectHealthSuppliesProducts.length > 8 && (
            <button
              className="bg-blue-900 text-white py-2 px-4 my-12 rounded mx-auto block"
              onClick={() => handleShowMore("purrfect")}
            >
              Show More
            </button>
          )}

          {/* Kitty Toys */}
          <h2 className="text-3xl font-semibold mb-6 mt-12">Kitty Toys</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Display the first 8 products */}
            {kittyToysProducts
              .slice(0, showMoreKitty ? 16 : 8)
              .map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
          </div>
          {/* Show More Button */}
          {!showMoreKitty && kittyToysProducts.length > 8 && (
            <button
              className="bg-blue-900 text-white py-2 px-4 my-12 rounded mx-auto block"
              onClick={() => handleShowMore("kitty")}
            >
              Show More
            </button>
          )}
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Products;
