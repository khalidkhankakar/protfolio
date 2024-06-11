import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";

const Card = ({ title, desc, img }:{title:string,desc:string,img:string}) => {
  return (
    <CardContainer className="card-style2  border-t-4 border-t-[#272A3C]  h-[200px] rounded-lg font-sans">
      <CardBody className="flex flex-col items-start justify-center space-x-0 md:flex-row md:items-center md:space-x-3">
        <CardItem>
          {/* image */}
          <Image
            src={img}
            className="h-12 w-12 md:h-16 md:w-16"
            alt="developer"
            width={100}
            height={100}
          />
        </CardItem>
        <CardItem>
          {/* heading */}
          <h3 className="text-[24px] font-semibold text-white">
            {title}
          </h3>
          {/* paragraph */}
          <p className="text-[10px] md:text-[12px]  font-light tracking-wider text-purple-1 md:tracking-wide">
            {desc}
          </p>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
