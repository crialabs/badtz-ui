import { FlippingCard } from "@/registry/components/flipping-card";

interface CardData {
  id: string;
  front: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  };
  back: {
    description: string;
    buttonText: string;
  };
}

const cardsData: CardData[] = [
  {
    id: "badtz-maru",
    front: {
      imageSrc:
        "https://cdn.badtz-ui.com/images/components/flipping-card/badtz.webp",
      imageAlt: "Badtz-Maru",
      title: "Badtz-Maru",
      description:
        'Bad Badtz-Maru (バッドばつ丸, Baddo Batsu Maru), commonly named "Badtz-Maru" is a penguin with spiky hair.',
    },
    back: {
      description:
        'Bad Badtz-Maru (バッドばつ丸, Baddo Batsu Maru), commonly named "Badtz-Maru", is a penguin with spiky hair, and one of the many characters of Sanrio.',
      buttonText: "Learn More",
    },
  },
  {
    id: "keroppi",
    front: {
      imageSrc:
        "https://cdn.badtz-ui.com/images/components/flipping-card/keroppii.webp",
      imageAlt: "Keroppi",
      title: "Keroppi",
      description:
        "Keroppi (けろけろけろっぴ, Kerokerokeroppi) is a small friendly green frog with large eyes.",
    },
    back: {
      description:
        "Keroppi (けろけろけろっぴ, Kerokerokeroppi) is a character created by Sanrio, designed by Tomoe Iwata, and the main protagonist of the Keroppi universe.",
      buttonText: "Learn More",
    },
  },
];

export default function FlippingCardDemo() {
  return (
    <div className="flex gap-4">
      {cardsData.map((card) => (
        <FlippingCard
          key={card.id}
          width={300}
          frontContent={<GenericCardFront data={card.front} />}
          backContent={<GenericCardBack data={card.back} />}
        />
      ))}
    </div>
  );
}

interface GenericCardFrontProps {
  data: CardData["front"];
}

function GenericCardFront({ data }: GenericCardFrontProps) {
  return (
    <div className="flex flex-col h-full w-full p-4">
      <img
        src={data.imageSrc}
        alt={data.imageAlt}
        className="w-full h-auto object-cover flex-grow min-h-0 rounded-md"
      />
      <div className="p-2">
        <h3 className="text-base font-semibold mt-2">{data.title}</h3>
        <p className="text-[13.5px] mt-2 text-muted-foreground">
          {data.description}
        </p>
      </div>
    </div>
  );
}

interface GenericCardBackProps {
  data: CardData["back"];
}

function GenericCardBack({ data }: GenericCardBackProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-6">
      <p className="text-[13.5px] mt-2 text-muted-foreground text-center">
        {data.description}
      </p>
      <button className="mt-6 bg-foreground text-background px-4 py-2 rounded-md text-[13.5px] w-min whitespace-nowrap h-8 flex items-center justify-center">
        {data.buttonText}
      </button>
    </div>
  );
}
