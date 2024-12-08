import React, { useState } from "react";
import "./Blog.css";

const Blog = () => {
  const blogCategories = [
    {
      name: "Nutritional Food",
      content: `
        Nutrition is the cornerstone of your infant's growth and development. In this section, 
        explore articles on the best foods for your baby, balanced meal plans, and recipes that 
        are not only nutritious but also easy to prepare. Learn about superfoods, essential 
        vitamins, and tips to manage picky eaters. Give your baby the foundation of healthy 
        eating from the start!`,
    },
    {
      name: "Do's and Don'ts",
      content: `
        Parenthood comes with its share of challenges, and knowing what to do (and what to avoid) 
        can make a big difference. Discover comprehensive lists of do's and don'ts for everyday 
        parenting, from handling tantrums to managing screen time. Whether it's introducing new 
        foods, setting routines, or ensuring safety during playtime, we’ve got you covered.`,
    },
    {
      name: "Health and Hygiene",
      content: `
        Keeping your baby healthy and happy requires a clean and safe environment. In this category, 
        find tips on maintaining hygiene for your little one, including bathing routines, diaper 
        care, and infection prevention. Learn about common health concerns like colic, teething, 
        and immunization schedules, ensuring your baby stays healthy all year round.`,
    },
    {
      name: "Play and Learning",
      content: `
        Play is essential for your baby's cognitive, emotional, and physical development. Discover 
        engaging activities, games, and toys that foster creativity and learning while making 
        playtime fun. From sensory play ideas to DIY toys, this section helps you create moments 
        of joy and discovery for your child at every developmental stage.`,
    },
    {
      name: "Parenting Tips",
      content: `
        Parenting is a journey filled with joy, love, and sometimes, challenges. This section offers 
        expert advice on building a strong parent-child bond, effective communication, and 
        stress management. Learn tips on discipline, managing sibling relationships, and creating 
        a positive and nurturing home environment.`,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="blog-container">
      {selectedCategory ? (
        <div className="blog-category-content">
          <h2>{selectedCategory.name}</h2>
          <p>{selectedCategory.content}</p>
          <button className="back-button" onClick={handleBackToCategories}>
            Back to Categories
          </button>
        </div>
      ) : (
        <div>
          <h1>Explore Blog Categories</h1>
          <p>
            Dive into our curated blogs to learn about all aspects of infant care and parenting.
            Whether you are looking for nutrition tips, playtime ideas, or expert advice, we have 
            something for every parent.
          </p>
          <ul className="blog-categories">
            {blogCategories.map((category, index) => (
              <li key={index} onClick={() => handleCategoryClick(category)}>
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Blog;
