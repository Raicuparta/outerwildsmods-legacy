import { useAmp } from "next/amp"

export const NavigationSeparator: React.FunctionComponent = () => {
  const isAmp = useAmp();

  return isAmp ? (
    <span>
      {' | '}
    </span>
  ) : null;
};
