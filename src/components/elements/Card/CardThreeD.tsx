import { CardContainer, CardBody, CardItem } from "../../ui/3d-card";

type CardWithoutImageProps = {
  cardTitle: string;
  cardContent: string;
};

const CardWithoutImage: React.FC<CardWithoutImageProps> = ({ cardTitle, cardContent }) => {
  return (
    <CardContainer containerClassName="bg-gray-200">
      <CardBody>
        <CardItem
          className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition duration-300 hover:text-gray-900 w-60 h-52 flex flex-col items-center justify-center"
          translateX={-15}
          translateY={15}
          translateZ={-15}
          rotateY={5}
          rotateX={5}
        >
          <h2 className="text-xl font-semibold mb-2 animate-bounce text-center">{cardTitle}</h2>
          <p className="font-semibold text-center">
            {cardContent}
          </p>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default CardWithoutImage;
