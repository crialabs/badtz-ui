import { usePlausible } from "next-plausible";

export function useTrackEvent() {
  const plausible = usePlausible();

  return (event: string, properties?: Record<string, any>) => {
    plausible(event, { props: properties });
  };
}
