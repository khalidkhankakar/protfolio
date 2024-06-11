import React from "react";
import { blogCards, } from "@/constant";
import BlogCard from "./cards/BlogCard";
import Button from "./Button";

const Blog = () => {
  return (
    <div className="m-auto my-8 flex max-w-[90vw] flex-col items-start justify-start md:max-w-2xl lg:max-w-[80vw]">
      <h2 className="h2-bold text-white">
        Latest <span className="text-cyan-1">Blog Post</span>
      </h2>
      <div className="mt-6 grid grid-cols-1 justify-center gap-5 lg:grid-cols-2">
        {blogCards.map(
          ({
            title,
            desc,
            tags,
            readTime,
          }: {
            title: string;
            desc: string;
            tags: [];
            readTime: string;
          }) => (
            <BlogCard
              key={title}
              title={title}
              desc={desc}
              tags={tags}
              readTime={readTime}
            />
          ),
        )}
      </div>
      <div className="flex items-center justify-center py-2 w-full">

      <Button label={"See more"} href={"#blog"} />
      </div>
    </div>
  );
};

export default Blog;
