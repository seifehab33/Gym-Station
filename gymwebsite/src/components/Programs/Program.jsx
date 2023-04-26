import React from "react";
import "./Program.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
const Program = () => {
  return (
    <section className="programs" id="programs">
      <div className="header-programs">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">To shape your body</span>
      </div>
      <div className="program-categories">
        {programsData.map((program) => (
          <div className="program-category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Program;
