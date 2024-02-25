import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../../ui/cardthreedimension";

interface CardWithImageProps {
  cardTitle: string;
  cardContent: string;
  imageUrl?: string;
  linkUrl: string;
}

const CardWithImage: React.FC<CardWithImageProps> = ({
  cardTitle,
  cardContent,
  imageUrl,
  linkUrl = "/",
}) => {
  return (
    <Link to={linkUrl}>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border hover:cursor-pointer">
          <CardItem
            translateZ="5"
            className=" text-center text-xl font-bold text-neutral-600 dark:text-white "
          >
            {cardTitle}
          </CardItem>
          <CardItem
            as="p"
            translateZ="5"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-justify line-clamp-4"
          >
            {cardContent}
          </CardItem>
          <CardItem translateZ="5" className="w-full mt-4">
            <img
              src={imageUrl}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          {/* <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div> */}
        </CardBody>
      </CardContainer>
    </Link>
  );
};

export default CardWithImage;
