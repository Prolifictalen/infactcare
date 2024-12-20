import React from "react";
import "./Shopping.css";
import firstcry from "../Assets/firstcry.jpg";
import babystore from "../Assets/babystore.jpg";
import kidsworld from "../Assets/kidsworld.jpg";
import huggies from "../Assets/huggies.jpg";
import pampers from "../Assets/pampers.jpg";
import mothercare from "../Assets/mothercare.jpg";
import buybuybaby from "../Assets/buybuy.jpg";
import amazon from "../Assets/amzon.jpg";

const Shopping = () => {
  const websites = [
    { 
      name: "Amazon (Baby Section)", 
      url: "https://www.amazon.com/baby", 
      image: amazon, 
      description: "Find a wide variety of baby products including toys, diapers, and more." 
    },
    { 
      name: "FirstCry", 
      url: "https://www.firstcry.com", 
      image: firstcry, 
      description: "India's largest online store for baby and kids products." 
    },
    { 
      name: "BabyCenter Store", 
      url: "https://store.babycenter.com", 
      image: babystore, 
      description: "Expert-approved baby essentials for all your parenting needs." 
    },
    { 
      name: "Huggies Store", 
      url: "https://www.huggies.com/en-us/shop", 
      image: huggies, 
      description: "Trusted diaper brand with additional baby care products." 
    },
    { 
      name: "Pampers Baby Store", 
      url: "https://www.pampers.com/en-us", 
      image: pampers, 
      description: "A complete range of Pampers diapers and wipes for your baby's comfort." 
    },
    { 
      name: "Mothercare", 
      url: "https://store.babycenter.com/", 
      image: mothercare, 
      description: "A trusted brand for baby clothing, toys, and maternity products." 
    },
   
    
    { 
      name: "Kids World", 
      url: "https://www.kids-world.com", 
      image: kidsworld, 
      description: "A global platform offering high-quality baby and kids' products." 
    },
    { 
      name: "BuyBuy Baby", 
      url: "https://www.buybuybaby.com", 
      image: buybuybaby, 
      description: "A one-stop shop for baby gear, nursery furniture, and essentials." 
    },
  ];

  return (
    <div className="shopping-page-container">
      <h1>Groom your Child by Shopping New Items </h1>
      <p className="shopping-description">
        Discover trusted platforms for purchasing high-quality infant care products. Explore a wide range of options tailored to your baby's needs.
      </p>
      <div className="shopping-list">
        {websites.map((site, index) => (
          <div key={index} className="shopping-card">
            <img src={site.image} alt={site.name} className="shopping-image" />
            <h3>{site.name}</h3>
            <p>{site.description}</p>
            <a href={site.url} target="_blank" rel="noopener noreferrer" className="shopping-link">
              Visit Store
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;
