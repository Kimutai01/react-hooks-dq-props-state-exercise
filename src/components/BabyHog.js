import React from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
// import SunBaby from "../assets/sun-eyes.png";
// import BlueBaby from "../assets/blue-eyes.png";
// import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({ name, hobby, eyeColor, weight, handleWeight }) {
  return (
    <li className="hogbabies">
      <img src="" alt="" />
      <h1>Name:{name}</h1>
      <h3>Weight:{weight}</h3>
      <h3>Hobby:{hobby}</h3>
      <h4>Eye Color:{eyeColor}</h4>

      <button name="+" onClick={handleWeight}>
        Increase Weight
      </button>
      <button name="-" onClick={handleWeight}>
        Decrease Weight
      </button>

      <div className="hb-wrap">
        <img
          src={normalBaby}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
