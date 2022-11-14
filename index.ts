// Import stylesheets
import './style.css';





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
  cost: {},
};

const miniera = ` Industrie Metalli Pesanti: ${metalMine.level}`;
document.getElementById('miniera').innerHTML = miniera;