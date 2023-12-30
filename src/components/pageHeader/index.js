import React from "react";

const PageHeader = ({ topic, header, description }) => {
  return (
    <>
      <div className="flex flex-col bg-blue-600 w-full h-auto md:mt-0 mt-10 ">
        <h6 className=" text-white text-xm md:text-xl md:ml-10 ml-4 pb-2 font-sans py-4 mb-4">
          {topic}
        </h6>
        <h1 className=" text-white font-bold text-xl md:text-4xl md:ml-10 ml-4 pb-2 font-sans">
          {header}
        </h1>
        <h6 className=" text-white text-xm md:text-xl md:ml-10 ml-4 pb-2 font-sans">
          {description}
        </h6>
      </div>
    </>
  );
};

export default PageHeader;
