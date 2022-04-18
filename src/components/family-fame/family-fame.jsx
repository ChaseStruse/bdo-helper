import { useState } from "react";
import './family-fame.css';

const defaultFameValues = {
  combat: 20,
  life: 30,
  special: 40,
  total: 1000,
};

const FamilyFame = () => {
  const [fameValues, setFameValues] = useState(defaultFameValues);
  const { combat, life, special, total } = fameValues;

  return (
    <div className="fame-content">
      <div className="combat-fame">
        <h1>Combat</h1>
        <p>{combat}</p>
      </div>
      <div className="life-fame">
        <h1>Life</h1>
        <p>{life}</p>
      </div>
      <div className="special-fame">
        <h1>Special</h1>
        <p>{special}</p>
      </div>
      <div className="total-fame">
        <h1>Total</h1>
        <p>{total}</p>
      </div>
    </div>
  );
};
export default FamilyFame;
