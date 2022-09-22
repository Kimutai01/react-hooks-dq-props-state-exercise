import React, { useState } from "react";
import Boss from "../assets/boss-hog.png";
import BabyHog from "./BabyHog";
import offspring from "../data.js";

function HogBoss() {
  const [eyeColor, setEyeColor] = useState("blue");
  const [weight, setWeight] = useState(2.54);

  function handleChangeEyeColor(e) {
    setEyeColor(e.target.value);
  }
  function handleChangeWeight(e) {
    // alert(1);
    console.log(e.target.name);
    if (e.target.name === "+") {
      setWeight((weight) => weight + 1);
    }
    if (e.target.name === "-") {
      setWeight((weight) => weight - 1);
    }
  }

  return (
    <div>
      <input
        type="radio"
        name="eyeColor"
        value="blue"
        onChange={handleChangeEyeColor}
      />
      Blue<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="sun"
        onChange={handleChangeEyeColor}
      />
      Sun<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="glowing"
        onChange={handleChangeEyeColor}
      />
      Glowing<br></br>
      <h2>Name: Blaster Boss</h2>
      <h3>Weight: {weight} Tons</h3>
      <h3>Eye Color: {eyeColor}</h3>
      <div id="boss-domicile">
        <img id="boss-blaster" src={Boss} alt="" />
      </div>
      <ul className="hoglist">
        {offspring.map((baby) => (
          <BabyHog
            key={baby.id}
            name={baby.name}
            eyeColor={eyeColor}
            hobby={baby.hobby}
            weight={weight}
            handleWeight={handleChangeWeight}
          />
        ))}
      </ul>
    </div>
  );
}

export default HogBoss;
