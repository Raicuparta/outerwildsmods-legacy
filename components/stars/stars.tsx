import { StarLayer1, StarLayer2 } from './stars.styles';

type StarData = {
  x: number;
  y: number;
  opacity: number;
  radius: number;
  id: number;
};

const width = 2000;
const height = 150;
const starCount = 125;

const round = (value: number, magnitude: number) =>
  Math.round(value * magnitude) / magnitude;

const random = (min: number, max: number) =>
  round(Math.random() * (max - min) + min, 100);

const starData1: StarData[] = [];
const starData2: StarData[] = [];

for (let i = 0; i < starCount; i++) {
  starData1.push({
    x: random(0, width),
    y: random(0, height),
    opacity: random(0.1, 0.8),
    radius: random(0.1, 1.2),
    id: i,
  });
  starData2.push({
    x: random(0, width),
    y: random(0, height),
    opacity: random(0.1, 0.8),
    radius: random(0.1, 1.2),
    id: i,
  });
}

export const Stars = () => (
  <>
    <StarLayer1
      preserveAspectRatio="xMinYMin slice"
      viewBox={`0 0 ${width} ${height}`}
    >
      {starData1.map(({ x, y, opacity, radius, id }) => (
        <circle key={id} cx={x} cy={y} r={radius} opacity={opacity} />
      ))}
    </StarLayer1>
    <StarLayer2
      preserveAspectRatio="xMinYMin slice"
      viewBox={`0 0 ${width} ${height}`}
      fill="white"
    >
      {starData2.map(({ x, y, opacity, radius, id }) => (
        <circle key={id} cx={x} cy={y} r={radius} opacity={opacity} />
      ))}
    </StarLayer2>
  </>
);
