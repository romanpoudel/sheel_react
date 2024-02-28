import CardWithImage from "@/components/elements/Card/CardThreeDImage";
import TitleWithContent from "@/components/elements/TitleWithContent/TitleWithContent";
import { services } from "./ServicesArray";

const Services: React.FC = () => {
  return (
    <>
      <TitleWithContent title="Services" />
      <div className="flex flex-wrap justify-center gap-12">
        {services.map((service, index) => (
          <CardWithImage
            key={index} // You can use index as the key since the service URLs might not be unique
            linkUrl={service.linkUrl}
            imageUrl={service.imageUrl}
            cardTitle={service.cardTitle}
            cardContent={service.cardContent}
          />
        ))}
      </div>
    </>
  );
};

export default Services;
