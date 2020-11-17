import { Wrapper } from './stars.styles';

type StarData = {
  x: number;
  y: number;
  opacity: number;
  radius: number;
  id: number;
};

const starDataList: StarData[] = [];

const width = 2000;
const height = 150;
const starCount = 250;

for (let i = 0; i < starCount; i++) {
  starDataList.push({
    x: Math.random() * width,
    y: Math.random() * height,
    opacity: Math.random() * 0.5 + 0.1,
    radius: Math.random() * 1.3 + 0.1,
    id: i,
  });
}

export const Stars = () => (
  <Wrapper
    preserveAspectRatio="xMinYMin slice"
    viewBox={`0 0 ${width} ${height}`}
  >
    {starDataList.map(({ x, y, opacity, radius, id }) => (
      <circle
        key={id}
        cx={x}
        cy={y}
        r={radius}
        fill={`rgba(240, 240, 255, ${opacity})`}
      />
    ))}
  </Wrapper>
);
