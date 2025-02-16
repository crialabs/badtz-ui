import {
  AnimatedCard,
  CardVisual,
  CardBody,
  CardTitle,
  CardDescription,
} from "@/registry/components/animated-cards/animated-card";
import { Visual2 } from "@/registry/components/animated-cards/visual-2";

export default function AnimatedCard1Demo() {
  return (
    <AnimatedCard>
      <CardVisual>
        <Visual2 mainColor="#ff6900" secondaryColor="#f54900" />
      </CardVisual>
      <CardBody>
        <CardTitle>Just find the right caption</CardTitle>
        <CardDescription>
          This card will tell everything you want
        </CardDescription>
      </CardBody>
    </AnimatedCard>
  );
}
