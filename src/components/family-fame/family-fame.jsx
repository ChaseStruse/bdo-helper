import { useEffect, useState } from "react";
import "./family-fame.css";

const defaultFameValues = {
  combat: 20,
  life: 30,
  special: 40,
  total: 1000,
};

const familyMember1 = {
  level: 14,
  lifeSkillLevels: {
    gathering: 30,
    fishing: 20,
    hunting: 22,
    cooking: 24,
    alchemy: 26,
    processing: 28,
    training: 30,
    trade: 32,
    farming: 34,
    sailing: 36,
    barter: 38,
  }, // 320 in total
};
const familyMember2 = {
  level: 56,
  lifeSkillLevels: {
    gathering: 30,
    fishing: 22,
    hunting: 28,
    cooking: 38,
    alchemy: 62,
    processing: 80,
    training: 50,
    trade: 22,
    farming: 42,
    sailing: 30,
    barter: 16,
  }, // 420 in total
};
const familyMember3 = {
  level: 60,
  lifeSkillLevels: {
    gathering: 90,
    fishing: 80,
    hunting: 70,
    cooking: 60,
    alchemy: 40,
    processing: 50,
    training: 30,
    trade: 20,
    farming: 10,
    sailing: 8,
    barter: 2,
  }, // 460 in total
};
var family = {
    members: [familyMember1, familyMember2, familyMember3],
    totalKnowledgeGained: 4000,
    contributionPoints: 308
} 

const calculateCombatFame = (level) => {
  var combatFame = level;
  if (level <= 15) {
    combatFame = 0;
  } else if (level >= 56 && level <= 59) {
    combatFame *= 2;
  } else if (level >= 60) {
    combatFame *= 5;
  }
  return combatFame;
};

const calculateLifeFame = (lifeSkillLevels) => {
  const {
    gathering,
    fishing,
    hunting,
    cooking,
    alchemy,
    processing,
    training,
    trade,
    farming,
    sailing,
    barter,
  } = lifeSkillLevels;

  var lifeFame =
    gathering +
    fishing +
    hunting +
    cooking +
    alchemy +
    processing +
    training +
    trade +
    farming +
    sailing +
    barter;

    return Math.floor(lifeFame / 2);
};

const calculateSpecialFame = (knowledgePoints, contributionPoints) => {
    return(knowledgePoints / 10) + contributionPoints;
}
const calculateFame = (family) => {
  var fameValues = {
    combat: 0,
    life: 0,
    special: 0,
    total: 0,
  };
  Array.from(family.members).forEach((familyMember) => {
    fameValues.combat += calculateCombatFame(familyMember.level);
    fameValues.life += calculateLifeFame(familyMember.lifeSkillLevels);
  });
  fameValues.special = calculateSpecialFame(family.totalKnowledgeGained, family.contributionPoints);
  fameValues.total = fameValues.combat + fameValues.life + fameValues.special;
  return fameValues;
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
      <button onClick={() => setFameValues(calculateFame(family))}>
        Click to test
      </button>
    </div>
  );
};
export default FamilyFame;
