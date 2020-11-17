import { Wrapper } from './stars.styles';

type StarData = {
  x: number;
  y: number;
  opacity: number;
  radius: number;
  id: number;
};

const width = 2000;
const height = 150;
const starCount = 250;

const round = (value: number, magnitude: number) =>
  Math.round(value * magnitude) / magnitude;

const random = (min: number, max: number) =>
  round(Math.random() * (max - min) + min, 100);

const starDataList: StarData[] = [];

for (let i = 0; i < starCount; i++) {
  starDataList.push({
    x: random(0, width),
    y: random(0, height),
    opacity: random(0.1, 0.8),
    radius: random(0.1, 1.2),
    id: i,
  });
}

export const Stars = () => (
  <Wrapper
    preserveAspectRatio="xMinYMin slice"
    viewBox={`0 0 ${width} ${height}`}
    fill="white"
  >
    {starDataList.map(({ x, y, opacity, radius, id }) => (
      <circle key={id} cx={x} cy={y} r={radius} opacity={opacity} />
    ))}
  </Wrapper>
);
