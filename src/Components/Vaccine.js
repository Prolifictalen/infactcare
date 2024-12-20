import React from "react";
import "./Vaccine.css";

const Vaccine = () => {
  const categories = [
    {
      ageGroup: "0-6 Months",
      description: "Critical time to build immunity and protect against life-threatening diseases.",
      vaccines: [
        {
          name: "BCG (Tuberculosis)",
          importance: "Protects against tuberculosis, a severe bacterial infection affecting lungs and other organs.",
        },
        {
          name: "Hepatitis B",
          importance: "Prevents chronic liver infections and liver cancer caused by Hepatitis B virus.",
        },
        {
          name: "DTP (Diphtheria, Tetanus, Pertussis)",
          importance: "Prevents three serious diseases: diphtheria, tetanus (lockjaw), and whooping cough.",
        },
        {
          name: "Polio (Oral/IPV)",
          importance: "Protects against polio, a crippling and potentially deadly viral disease.",
        },
        {
          name: "Rotavirus",
          importance: "Prevents severe diarrhea and dehydration in infants caused by rotavirus.",
        },
        {
          name: "Hib (Haemophilus Influenzae Type B)",
          importance: "Protects against bacterial meningitis and pneumonia in young children.",
        },
      ],
    },
    {
      ageGroup: "6-12 Months",
      description: "Strengthens immunity against common viral and bacterial infections.",
      vaccines: [
        {
          name: "Measles, Mumps, Rubella (MMR)",
          importance: "Prevents three highly contagious viral diseases: measles, mumps, and rubella.",
        },
        {
          name: "Hepatitis A",
          importance: "Protects against liver disease caused by Hepatitis A virus.",
        },
        {
          name: "Influenza",
          importance: "Provides protection against flu, which can be severe in young children.",
        },
      ],
    },
    {
      ageGroup: "12-18 Months",
      description: "Booster doses ensure extended protection and immunity.",
      vaccines: [
        {
          name: "Varicella (Chickenpox)",
          importance: "Prevents chickenpox, which can cause severe rashes, fevers, and complications.",
        },
        {
          name: "Pneumococcal Conjugate",
          importance: "Protects against bacterial infections like pneumonia, meningitis, and bloodstream infections.",
        },
        {
          name: "MMR Booster",
          importance: "Strengthens immunity from the first MMR dose.",
        },
        {
          name: "Typhoid Conjugate Vaccine (TCV)",
          importance: "Protects against typhoid fever caused by contaminated food or water.",
        },
      ],
    },
    {
      ageGroup: "18-24 Months",
      description: "Critical for maintaining long-term immunity against key diseases.",
      vaccines: [
        {
          name: "DTP Booster",
          importance: "Boosts immunity against diphtheria, tetanus, and pertussis.",
        },
        {
          name: "Polio Booster",
          importance: "Ensures continued protection against poliovirus.",
        },
        {
          name: "Hepatitis B Booster",
          importance: "Provides long-lasting immunity against Hepatitis B.",
        },
        {
          name: "Influenza (Annual)",
          importance: "Prevents seasonal flu outbreaks, especially during vulnerable years.",
        },
      ],
    },
  ];

  return (
    <div className="vaccine-container">
      <h1 className="vaccine-title">Vaccine Guide</h1>
      <p className="vaccine-intro">
        Vaccinations are a vital step in protecting your child against dangerous diseases. Explore our comprehensive vaccine guide for age-specific recommendations and the importance of each vaccine.
      </p>

      <div className="vaccine-category-section">
        {categories.map((category, index) => (
          <div key={index} className="vaccine-category-card">
            <h2 className="vaccine-category-title">{category.ageGroup}</h2>
            <p className="vaccine-category-description">{category.description}</p>
            <table className="vaccine-table">
              <thead>
                <tr>
                  <th>Vaccine Name</th>
                  <th>Why It's Important</th>
                </tr>
              </thead>
              <tbody>
                {category.vaccines.map((vaccine, idx) => (
                  <tr key={idx}>
                    <td>{vaccine.name}</td>
                    <td>{vaccine.importance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <footer className="vaccine-footer">
        <h3>Why Vaccinations Matter</h3>
        <p>
          Vaccines save lives by protecting children from preventable diseases. They are the safest and most effective way to build immunity and ensure your child's healthy future.
        </p>
      </footer>
    </div>
  );
};

export default Vaccine;
