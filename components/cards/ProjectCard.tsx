import Image from "next/image";

const ProjectCard = ({
  projectName,
  projectExplain,
  projectImg,
  projectLink,
  projectCodeLink,
  projectTechs,
}: {
  projectName: string;
  projectExplain: string;
  projectImg: string;
  projectLink: string;
  projectCodeLink: string;
  projectTechs: string[];
}) => {
  return (
    <div className="card-style rounded-xl">
      {/* project Img */}
      <div className="rounded-lg bg-slate-800 p-3">
        <Image
          src={projectImg}
          width={500}
          height={500}
          alt="img"
          className="mx-auto h-[200px] w-full object-contain md:h-[250px]"
        />
      </div>
      {/* project explaination */}
      <div className="my-3">
        <h3 className="text-[20px] font-bold tracking-wide text-white md:text-[32px]">
          {projectName}
        </h3>
        <p className="text-[10px] font-light tracking-wider text-purple-1 md:text-[12px] md:tracking-wide">
          {projectExplain}
        </p>
        <div className="flex items-center justify-between my-2">
          {/* used techs */}
          <div className='flex items-center space-x-2 '>  
            {/* map techs */}
            {projectTechs.map((projectTechImg) => (
              <Image
                key={projectTechImg}
                src={projectTechImg}
                className="h-6 w-6 object-contain"
                width={28}
                height={28}
                alt={"img"}
              />
            ))}
          </div>

<div>
  
</div>
          {/* site link */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
