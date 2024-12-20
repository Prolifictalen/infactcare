import React, { useState } from "react";
import "./Blog.css";
import Food1 from "../Assets/Food1.jpg";
import Food2 from "../Assets/food2.jpg";
import Food3 from "../Assets/food3.jpg";
import Food4 from "../Assets/food4.jpg";
import Food5 from "../Assets/food5.jpg";
import Food6 from "../Assets/food6.jpg";
import Food7 from "../Assets/food7.jpg";
import Food8 from "../Assets/food8.jpg";
import Food9 from "../Assets/food9.jpg";
import Food10 from "../Assets/food10.jpg";
import banana from "../Assets/banana.jpg";
import apple from "../Assets/apple.jpg";
import swwetp from "../Assets/swwetpap.jpg";
import ava from "../Assets/ava.jpg";
import lentils from "../Assets/lentils.jpg";
import bath1 from "../Assets/bath1.jpg";
import bath2 from "../Assets/bath2.jpg";
import bath3 from "../Assets/bath3.jpg";
import teeth from "../Assets/teeth.jpg";
import play1 from "../Assets/play1.jpg";
import play3 from "../Assets/play3.jpg";
import play4 from "../Assets/play4.jpg";
import play5 from "../Assets/play5.jpg";
import play6 from "../Assets/play6.jpg";
import play7 from "../Assets/play7.jpg";
import play9 from "../Assets/play9.jpg";
import play10 from "../Assets/play10.jpg";
import play12 from "../Assets/play12.jpg";
import play8 from "../Assets/play8.jpg";
const Blog = () => {
  const blogCategories = [
    {
      name: "Nutritional Food",
      content: (
        <>
          <p>
          Nutrition plays a vital role in the growth and development of your baby during their formative years.
          Providing a well-balanced diet ensures that your baby builds a strong immune system,
          achieves optimal brain development, and establishes healthy eating habits from the start. Below, 
          we dive into everything you need to know about feeding your infant the right foods, from superfoods to 
          practical tips for meal preparation.
          <h3> The Importance of Infant Nutrition :</h3>
          In the first year of life, your baby grows at an incredible rate—doubling their birth weight by around 4 to 6 months and tripling it 
          by their first birthday. This rapid physical growth is accompanied by significant cognitive and emotional development, making nutrition during this 
          time especially critical. Unlike older children or adults, infants require specific nutrients in precise amounts to fuel their development and strengthen their bodies.
          
          <h3>Why It Matters:</h3>
          <p>
            Ensuring your baby gets the right nutrients builds immunity, enhances brain development, and 
            sets the foundation for a healthy lifestyle.
          </p>
         <div className="image-grid">
            <img src={Food1} alt="Balanced Meal" />
            <img src={Food2} alt="Balanced Meal" />
            <img src={Food3} alt="Balanced Meal" />
            <img src={Food4} alt="Balanced Meal" />
            <img src={Food5} alt="Balanced Meal" />
            <img src={Food6} alt="Balanced Meal" />
            <img src={Food7} alt="Balanced Meal" />
            <img src={Food8} alt="Balanced Meal" />
            <img src={Food9} alt="Balanced Meal" />
            <img src={Food10} alt="Balanced Meal" />
          </div>
          </p>
          <h3> Proper nutrition supports:</h3>
          <li>Cognitive Development: Nutrient-rich foods like avocados and bananas provide essential vitamins and minerals that foster brain development. </li>
          <li>Immunity Boosting: Breast milk, along with fortified cereals and pureed vegetables, helps enhance your baby’s immune system to fight common illnesses.</li>
          <li>Healthy Growth: Proteins and calcium-rich foods, such as yogurt and lentils, support muscle development and bone health.</li> 
          
          <h3>Explore the Essentials:</h3>
          <section> <h4>Superfoods for Infants:</h4>
          <p>Superfoods are nutrient-dense foods that provide an abundance of vitamins, minerals, and essential nutrients in every bite. Including these in your baby’s 
          diet ensures proper growth and development while building a strong foundation for lifelong health. Here’s a detailed look at some superfoods, homemade recipes,
          and the importance of a balanced diet for your little one. </p>
          <img src={banana} alt="Balanced Meal" />
          <img src={apple} alt="Balanced Meal" />
          <img src={ava} alt="Balanced Meal" />
          <img src={swwetp} alt="Balanced Meal" />
          <img src={lentils} alt="Balanced Meal" />
          </section>
          <section> <h4>Homemade Recipes for Your Baby:</h4>
          <p>Here are some easy-to-make recipes that combine these superfoods for a nutritious and delicious meal: </p>
          <h4>Banana-Oatmeal Breakfast:</h4><p>
          <b>Ingredients:</b>1 ripe banana, 2 tablespoons of oatmeal, breast milk or formula.
          Directions: Cook oatmeal as per the instructions. Mash the banana and mix it into the oatmeal. Add a splash of breast milk or formula for a smoother consistency.
          Bonus Tip: Add a dash of cinnamon for flavor.
          </p>
          <h4>Blueberry-Yogurt Parfait:</h4><p>
          <b>Ingredients:</b> 1/4 cup blueberries, 1/4 cup plain yogurt, 1 tablespoon oats (optional).
          Directions: Blend blueberries into a puree. Layer the yogurt and blueberry puree in a small bowl or cup. Add a sprinkle of oats for texture.
          </p>
          </section>
          <section> <h4>What is a Proper Balanced Diet for Infants?</h4><p>
          A balanced diet for your baby includes all the essential nutrients in appropriate proportions.
          <li><b>Carbohydrates:</b> They provide energy for growth and activity.</li>
          <li><b>Proteins:</b>  They are essential for muscle and tissue development.</li>
          <li><b>Healthy Fats: </b> They support brain development.</li>
          <li><b>Vitamins and Minerals: </b> They strengthen immunity and support overall health.</li>
          <li><b>Iron:</b>  It prevents anemia and supports brain development.</li>
          </p>
          </section>
        </> 
      ),
    },
    {
      name: "Health and Hygiene",
      content: (
          <>
            <p>
            Keeping your baby healthy and happy requires a clean and safe environment. In this category, 
            find tips on maintaining hygiene for your little one, including bathing routines, diaper 
            care, and infection prevention. Learn about common health concerns like colic, teething, 
            and immunization schedules, ensuring your baby stays healthy all year round.
            <h2> Baby Bath Hygiene: A Complete Guide for Parents</h2>
            Bathing your baby is not only essential for maintaining hygiene but also an opportunity to bond and make your 
            little one feel refreshed and relaxed. Proper bath hygiene ensures that your baby’s sensitive skin stays clean, free 
            from rashes, and healthy. Here’s everything you need to know about baby bath hygiene.</p>
            <div className="image-grid">
              <img src={bath1} alt="hygine bath" />
              <img src={bath2} alt="hygine bath" />
              <img src={bath3} alt="hygine bath" />
             </div>
            <h3>Why is Bath Hygiene Important</h3>
            <p>Babies have delicate and sensitive skin, making them prone to rashes, irritation, and infections if proper hygiene is not maintained. Bathing your baby correctly:
           <li>Keeps their skin free from dirt, sweat, and bacteria.</li>
           <li>Prevents diaper rashes and fungal infections.</li>
           <li>Promotes better sleep and relaxation.</li>
           <li>Helps you inspect their skin for any issues, like dryness or irritation.</li></p>
            
            <h3>How Often Should You Bathe Your Baby</h3>
            <section>
            <h4>Newborns (0-3 months):</h4> <p>Sponge baths 2-3 times a week are sufficient until the umbilical cord stump falls off and heals completely. </p>
            <h4>Infants (3-12 months):</h4> <p>You can bathe your baby 3-4 times a week. Daily baths are fine during hot weather but ensure not to overdo it to avoid drying out their skin.</p>
            </section>
            

    <h3>Tips for Safe and Hygienic Bathing</h3>
    <table style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}>
      <thead>
        <tr style={{ backgroundColor: "#f4eade", textAlign: "left" }}>
          <th style={{ padding: "10px", border: "1px solid #ddd" }}>Tip</th>
          <th style={{ padding: "10px", border: "1px solid #ddd" }}>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: "10px", border: "1px solid #ddd" }}>Always Stay Close</td>
          <td style={{ padding: "10px", border: "1px solid #ddd" }}>
            Never leave your baby unattended in the bath, even for a second.
          </td>
        </tr>
        <tr>
          <td style={{ padding: "10px", border: "1px solid #ddd" }}>Use Baby-Safe Products</td>
          <td style={{ padding: "10px", border: "1px solid #ddd" }}>
            Choose soaps and shampoos specifically designed for babies to avoid irritation.
          </td>
        </tr>
        <tr style={{ backgroundColor: "#f9f4f0" }}>
          <td style={{ padding: "10px", border: "1px solid #ddd" }}>Avoid Over-Bathing</td>
          <td style={{ padding: "10px", border: "1px solid #ddd" }}>
            Excessive bathing can strip natural oils from your baby’s skin, leading to dryness.
          </td>
        </tr>
        <tr>
          <td style={{ padding: "10px", border: "1px solid #ddd" }}>Clean the Bath Area</td>
          <td style={{ padding: "10px", border: "1px solid #ddd" }}>
            Wash the bathtub or basin thoroughly after each use to prevent bacterial buildup.
          </td>
        </tr>
        <tr style={{ backgroundColor: "#f9f4f0" }}>
          <td style={{ padding: "10px", border: "1px solid #ddd" }}>Keep It Short</td>
          <td style={{ padding: "10px", border: "1px solid #ddd" }}>
            Limit baths to 5-10 minutes to avoid overexposure to water, which can dry out their skin.
          </td>
        </tr>
      </tbody>
    </table>
            <h3>Common Bathing Mistakes to Avoid </h3>
            <li>Using water that’s too hot or cold.</li>
            <li>Applying adult soaps, which can irritate a baby’s sensitive skin.</li>
            <li>Rushing the bath or skipping areas like behind the ears and between the fingers and toes.</li>
            <li>Forgetting to dry folds and creases properly.</li>
            <h2>Baby Oral Hygiene: A Comprehensive Guide </h2>
            <p>Proper oral hygiene for babies is crucial, even before their first teeth emerge. Establishing good oral care habits early 
            helps prevent infections, tooth decay, and other dental problems, setting the stage for a lifetime of healthy smiles. Here's a detailed guide to maintaining your baby's oral hygiene.</p>
            
            <h3>Why is Baby Oral Hygiene Important</h3>
<table style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}>
  <thead>
    <tr style={{ backgroundColor: "#f4eade", textAlign: "left" }}>
      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Reason</th>
      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
        Prevention of Early Tooth Decay
      </td>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
        Milk residue and sugars can accumulate on your baby's gums and teeth,
        leading to cavities as their teeth start to come in.
      </td>
    </tr>
    <tr>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
        Healthy Gum Development
      </td>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
        Cleaning gums keeps them free from bacteria, ensuring healthy teeth
        growth.
      </td>
    </tr>
    <tr>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>Habit Formation</td>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
        Teaching oral hygiene early helps your baby get accustomed to the
        routine, making it easier as they grow.
      </td>
    </tr>
  </tbody>
</table>
         <img src={teeth} alt="teeth" /> 
           
            
            <h3>When to Start Oral Hygiene?</h3>
            <li>Start before the first tooth appears by cleaning your baby's gums daily.</li>
            <li>Once the first tooth erupts (around 6 months), begin using a baby toothbrush.</li>
            <li>Transition to fluoride toothpaste when your child can spit (usually around 2 years of age).</li>
<h3>Foods to Avoid for Better Oral Hygiene</h3>
<table style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}>
  <thead>
    <tr style={{ backgroundColor: "#f4eade", textAlign: "left" }}>
      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Food</th>
      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Impact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>Sugary Juices or Drinks</td>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
        These can stick to the gums and teeth, leading to decay.
      </td>
    </tr>
    <tr>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>Sticky Snacks</td>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
        Foods like caramel and gummy candies can remain stuck between teeth.
      </td>
    </tr>
    <tr>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>Prolonged Bottle Feeding</td>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
        Avoid letting your baby sleep with a bottle containing milk or juice.
      </td>
    </tr>
  </tbody>
</table>



            
          </> 
        ),
    },
    
    {
      name: "Play and Learning",
      content: (
        <>
          <h2>The Foundation of Your Baby’s Development</h2>
          <p>
            Play is not just about fun and games—it’s one of the most critical
            aspects of a child’s early development. Through play, babies explore
            the world, learn new skills, and build the foundations for cognitive,
            emotional, and physical growth. Whether it’s tummy time, interactive
            toys, or storytime, every activity contributes to their overall
            development.
          </p>
          <h3>Why Play is Important for Your Baby’s Development</h3>
            <h4>Cognitive Development:</h4> <p>Play helps babies learn to solve
              problems, understand cause-and-effect relationships, and enhance
              memory. Activities like stacking blocks or playing peek-a-boo
              challenge their minds and foster critical thinking skills.</p>
            <h4>Physical Development:</h4> Gross and fine motor skills are developed
              through play. Crawling, reaching for toys, and eventually walking
              strengthen muscles and coordination. Activities like tummy time also
              prepare babies for future milestones like sitting up and crawling.
            <h4>Social and Emotional Growth:</h4> Interactive play allows babies to
              bond with caregivers and learn about emotions. Simple activities like
              smiling back at your baby or clapping hands help them understand
              social cues and build trust.
            <h4>Language and Communication Skills:</h4> Singing songs, reading
              books, and talking to your baby during playtime introduce them to
              language. These interactions improve vocabulary and comprehension over
              time.
            
          <img src={play1} alt="playing and learning" />
          <img src={play6} alt="playing and learning" />
          <img src={play3} alt="playing and learning" />
          <img src={play4} alt="playing and learning" />
          <img src={play5} alt="playing and learning" />
          
          <div className="play-ideas-section">
  <h3>Engaging Play Ideas by Age Group</h3>
  
  <div className="age-group-container">
    <div className="age-group">
      <h4>0–6 Months: Sensory Exploration</h4>
      <div className="idea-card">
        <b>Tummy Time</b>
        <p>Lay your baby on their tummy to strengthen their neck and shoulder muscles. Use colorful toys to keep them engaged.</p>
      </div>
      <div className="idea-card">
        <b>Contrast Toys</b>
        <p>Babies at this age can see high-contrast patterns better. Show them black-and-white cards or books.</p>
      </div>
      <div className="idea-card">
        <b>Music & Sounds</b>
        <p>  Play gentle music or introduce rattles to stimulate auditory senses.</p>
      </div>
      <div className="idea-card">
        <b>Mirror</b>
        <p>Babies love looking at reflections. Place an unbreakable mirror nearby during tummy time.</p>
      </div>
    </div>
    
    <div className="age-group">
      <h4>6–12 Months: Active Play</h4>
      <div className="idea-card">
        <b>Stacking & Sorting Toys</b>
        <p>Help them develop hand-eye coordination by stacking blocks or sorting shapes.</p>
      </div>
      <div className="idea-card">
        <b>Interactive Books</b>
        <p>Choose books with textures, flaps, or sounds to keep your baby interested.</p>
      </div>
      <div className="idea-card">
        <b>Crawling Games</b>
        <p>Encourage crawling by placing toys just out of reach.</p>
      </div>
      <div className="idea-card">
        <b>Peek-a-Boo</b>
        <p>This classic game teaches object permanence and makes them laugh.</p>
      </div>
    </div>
    
    <div className="age-group">
      <h4>1–2 Years: Exploration and Discovery</h4>
      <div className="idea-card">
        <b>Building Blocks</b>
        <p>Encourage creativity and motor skills by letting them build towers.</p>
      </div>
      <div className="idea-card">
        <b>Water Play</b>
        <p>A small tub with water and safe toys can keep them entertained while improving sensory skills.</p>
      </div>
      <div className="idea-card">
        <b>Pretend Play</b>
        <p>Simple toys like a play kitchen or toy animals foster imagination.</p>
      </div>
      <div className="idea-card">
        <b>Musical Instruments</b>
        <p>Introduce tambourines, xylophones, or drums to develop rhythm and coordination.</p>
      </div>
    </div>
    
    <div className="age-group">
      <h4>2–3 Years: Structured Play</h4>
      <div className="idea-card">
        <b>Storytelling Time</b>
        <p>Read books with simple storylines to develop comprehension and listening skills.</p>
      </div>
    </div>
  </div>
</div>

          <h3>Outdoor Play: A Breath of Fresh Air</h3>
          <p>
            Outdoor play is as crucial as indoor activities. Fresh air, sunlight,
            and natural surroundings stimulate sensory experiences and improve
            physical health.
          </p>
          
            <li>Nature Walks:Take your baby on a walk in a stroller, pointing
              out trees, birds, and flowers.</li>
            <li>Sandbox Play:Allow toddlers to explore textures by digging and
              building with sand.</li>
            <li>Obstacle Courses:Set up a safe course with cushions, tunnels,
              and slides.</li>
        
          <h3>Screen-Free Play Ideas</h3>
           <li>Dance Parties:Play some music and dance with your baby.</li>
           <li>Treasure Hunts:Hide toys around the house and let them find them.</li>
           <li>Sensory Bins:Fill a bin with rice, pasta, or water beads and
           let your child explore textures.</li>
           <img src={play7} alt="playing and learning" />
          <img src={play8} alt="playing and learning" />
          <img src={play9} alt="playing and learning" />
          <img src={play10} alt="playing and learning" />
          <img src={play12} alt="playing and learning" />
              
            
              
          
        
          <h3>Conclusion</h3>
          <p>
            Play and learning are deeply intertwined in your baby’s development
            journey. Every giggle, clap, or tiny discovery contributes to building a
            strong foundation for their future. As a caregiver, your involvement,
            encouragement, and creativity will make playtime not only fun but also
            impactful. Remember, the best toy your child can have is your time and
            attention!
          </p>
        </>
      ),
    },
    
    
    {
      name: "Parenting Tips",
      content: (
        <>
          <div className="parenting-tips-header">
            <h3>Parenting Tips: Building a Loving and Supportive Environment</h3>
            <p>
              Parenting is an incredible journey of love, joy, and learning. These actionable tips will help you foster a nurturing environment where your child can grow and thrive.
            </p>
          </div>
    
          <div className="tips-section" style={{ backgroundColor: "#f4f4f8", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
            <h4 style={{ color: "#5a4235", borderBottom: "2px solid #e4d7cc", paddingBottom: "5px" }}>1. Build a Strong Parent-Child Bond</h4>
            <div className="tip-card" style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
              <span className="tip-icon" style={{ fontSize: "2rem", marginRight: "10px", color: "#5a4235" }}>❤️</span>
              <div>
                <h5 style={{ margin: "0", color: "#5a4235" }}>Quality Time</h5>
                <p>Spend dedicated, uninterrupted time with your child daily to strengthen your bond.</p>
              </div>
            </div>
            <div className="tip-card" style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
              <span className="tip-icon" style={{ fontSize: "2rem", marginRight: "10px", color: "#5a4235" }}>👂</span>
              <div>
                <h5 style={{ margin: "0", color: "#5a4235" }}>Listen Actively</h5>
                <p>Encourage your child to express their thoughts and feelings. Listen without judgment.</p>
              </div>
            </div>
          </div>
    
          <div className="tips-section" style={{ backgroundColor: "#fdf8f5", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
            <h4 style={{ color: "#5a4235", borderBottom: "2px solid #e4d7cc", paddingBottom: "5px" }}>2. Foster Positive Communication</h4>
            <div className="tip-card" style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
              <span className="tip-icon" style={{ fontSize: "2rem", marginRight: "10px", color: "#5a4235" }}>🗣️</span>
              <div>
                <h5 style={{ margin: "0", color: "#5a4235" }}>Speak with Respect</h5>
                <p>Use kind words, even during disagreements, to model respectful communication.</p>
              </div>
            </div>
            <div className="tip-card" style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
              <span className="tip-icon" style={{ fontSize: "2rem", marginRight: "10px", color: "#5a4235" }}>📖</span>
              <div>
                <h5 style={{ margin: "0", color: "#5a4235" }}>Be Clear and Consistent</h5>
                <p>Set clear expectations and follow through consistently to teach boundaries.</p>
              </div>
            </div>
          </div>
    
          <div className="interactive-tips" style={{ backgroundColor: "#f8f0e5", padding: "20px", borderRadius: "8px" }}>
            <h4 style={{ color: "#5a4235", borderBottom: "2px solid #e4d7cc", paddingBottom: "5px" }}>Interactive Ideas to Make Parenting Fun</h4>
            <ul className="parenting-interactive-list" style={{ listStyle: "none", padding: "0" }}>
              <li style={{ marginBottom: "10px" }}>
                <span className="interactive-icon" style={{ fontSize: "2rem", marginRight: "10px", color: "#5a4235" }}>🎲</span>
                <b>Family Game Nights:</b> Dedicate an evening to board games or puzzles to bond and have fun.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <span className="interactive-icon" style={{ fontSize: "2rem", marginRight: "10px", color: "#5a4235" }}>🍳</span>
                <b>Cooking Together:</b> Involve your child in preparing meals to teach life skills and spend quality time.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <span className="interactive-icon" style={{ fontSize: "2rem", marginRight: "10px", color: "#5a4235" }}>✂️</span>
                <b>DIY Projects:</b> Create crafts or build something together to foster creativity and teamwork.
              </li>
            </ul>
          </div>
    
          <p style={{ fontSize: "1.2rem", marginTop: "20px", color: "#4c4c4c" }}>
            Parenting isn’t about perfection—it’s about progress. With patience, love, and creativity, you can navigate challenges and cherish the joys of raising your child.
          </p>
        </>
      ),
    }
    
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
