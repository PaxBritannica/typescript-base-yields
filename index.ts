// Import stylesheets
import './style.css';

let bank = [
  {
    name: 'metal',
    quantity: 1000,
  },
  {
    name: 'crystal',
    quantity: 15000,
  },
  {
    name: 'deutereum',
    quantity: 20000,
  },
];

export interface Mine {
  level: number;
  isAllied: boolean;
  baseOutputSec: number;
  buildMS: number;
  xBuildMS: number;
  cost?: {
    baseMetal?: number;
    xMetalPrice?: number;
    baseCrystal?: number;
    xCrystal?: number;
    baseDeuter?: number;
    xDeutPrice?: number;
  };
}

const metalMine: Mine = {
  buildMS: 1,
  xBuildMS: 1,
  level: 1,
  isAllied: true,
  baseOutputSec: 3,
  cost: {
    baseMetal: 2500,
    xMetalPrice: 1.4,
  },
};

function mine(): string[] {
  let numbers = [];
  let yM = 0.3 * 10 * 1.1 ** 10;
  let yC = 0.2 * 2 * 1.1 ** 2;
  let yD = 0.1 * 5 * 1.1 ** 1;

  for (let mineral of bank) {
    if (mineral.name === 'metal') {
      mineral.quantity += yM;
    }
    if (mineral.name === 'crystal') {
      mineral.quantity += yC;
    }
    if (mineral.name === 'deutereum') {
      mineral.quantity += yD;
    }

    numbers.push(mineral.quantity.toString());
  }
  document.getElementById('mx3').innerHTML = Math.round(bank[0].quantity);
  document.getElementById('cx3').innerHTML = Math.round(bank[1].quantity);
  document.getElementById('dx3').innerHTML = Math.round(bank[2].quantity);
  return numbers;
}

const m3 = `${Math.round(0.3 * 3 * 1.1 ** 3 * 60 * 60)}`;
const m5 = `${Math.round(0.2 * 5 * 1.1 ** 5 * 60 * 60)}`;
const m10 = `${Math.round(0.1 * 10 * 1.1 ** 10 * 60 * 60)}`;

const miniera = ` Industrie Metalli Pesanti: ${metalMine.level}`;
document.getElementById('miniera').innerHTML = miniera;

document.getElementById('m3').innerHTML = m3;
document.getElementById('m5').innerHTML = m5;
document.getElementById('m10').innerHTML = m10;
// examples of rates:

setInterval(() => mine(), 1000);

// try to add a button function that increases both the level of the farm and the base yields
