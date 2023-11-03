import React from "react";

const ExperiencesBlock = ({ heading, experiences }) => {
  const renderExperienceButton = (experience, index) => {
    const { label } = experience;
    return (
      <button key={index} className="experience-button">
        <div className="button-content">
          {label}
        </div>
      </button>
    );
  };

  return (
    <section>
      <div className="experiences-container">
        <h1 className="experience-heading">
          {heading}
        </h1>
        <div className="experience-buttons">
          {experiences?.map((experience, index) => renderExperienceButton(experience, index))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesBlock;