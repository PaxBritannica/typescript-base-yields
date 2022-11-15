// Import stylesheets
import './style.css';

let bank = [
  {
    name: 'metal',
    quantity: 2499,
  },
  {
    name: 'crystal',
    quantity: 0,
  },
  {
    name: 'deutereum',
    quantity: 0,
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
const metalCry: Mine = {
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
const metalDeu: Mine = {
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
  let yM = 0.3 * metalMine.level * 1.1 ** metalMine.level;
  let yC = 0.2 * 3 * 1.1 ** 3;
  let yD = 0.1 * 3 * 1.1 ** 3;

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

document.getElementById('rM').onclick = function () {
  myFunction(metalMine, bank);
};
document.getElementById('rD').onclick = function () {
  myFunction(metalCry);
};
document.getElementById('rC').onclick = function () {
  myFunction(metalDeu);
};

const m3 = `${Math.round(0.3 * 3 * 1.1 ** 3 * 60 * 60)}`;
const m5 = `${Math.round(0.3 * 5 * 1.1 ** 5 * 60 * 60)}`;
const m10 = `${Math.round(0.3 * 20 * 1.1 ** 20 * 60 * 60)}`;
const c3 = `${Math.round(0.2 * 3 * 1.1 ** 3 * 60 * 60)}`;
const c5 = `${Math.round(0.2 * 5 * 1.1 ** 5 * 60 * 60)}`;
const c10 = `${Math.round(0.2 * 10 * 1.1 ** 10 * 60 * 60)}`;
const d3 = `${Math.round(0.1 * 3 * 1.1 ** 3 * 60 * 60)}`;
const d5 = `${Math.round(0.1 * 5 * 1.1 ** 5 * 60 * 60)}`;
const d10 = `${Math.round(0.1 * 10 * 1.1 ** 10 * 60 * 60)}`;

let miniera = ` Estrattori Metalli Pesanti: ${metalMine.level}`;
let fibra = ` Filiera della fibra: ${metalMine.level}`;
let oliera = ` Estrazione Idrocarburi: ${metalMine.level}`;
document.getElementById('miniera').innerHTML = miniera;
document.getElementById('oliera').innerHTML = oliera;
document.getElementById('fibra').innerHTML = fibra;

document.getElementById('m3').innerHTML = m3;
document.getElementById('m5').innerHTML = m5;
document.getElementById('m10').innerHTML = m10;
document.getElementById('c3').innerHTML = c3;
document.getElementById('c5').innerHTML = c5;
document.getElementById('c10').innerHTML = c10;
document.getElementById('d3').innerHTML = d3;
document.getElementById('d5').innerHTML = d5;
document.getElementById('d10').innerHTML = d10;
// examples of rates:

setInterval(() => mine(), 1000);

function myFunction(mine, bank) {
  const metalInBank = bank.find((resource) => resource.name === 'metal');
  const haveEnoughMetal = mine.cost.baseMetal < metalInBank.quantity;
  //...

  if (haveEnoughMetal) {
    //chiamata per patchare il bank... Con la nuova quantity
    metalInBank.quantity -= mine.cost.baseMetal;
    //.. Return di bank direttamente?
    setTimeout(sayHi, 1000, mine);
  } else {
    console.log('Not Possible');
  }
}

function sayHi(mine) {
  console.log((mine.level += 1));
  mine.level += 1;
  miniera = ` Estrattori Metalli Pesanti: ${metalMine.level}`;
  document.getElementById('miniera').innerHTML = miniera;
}

// try to add a button function that increases both the level of the farm and the base yields
