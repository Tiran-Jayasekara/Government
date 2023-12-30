"use client";
import PageHeader from "@/components/pageHeader";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Government = () => {
  const router = useRouter();
  const governmentData = [
    {
      img: "/assests/pradeshiyaSabha.jpg",
      name: "ප්‍රාදේශීය සභාව",
      status: false,
      description:
        "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
      path:"/pages/government/pradeshiya_sabha"
    },
    {
      img: "https://island.lk/wp-content/uploads/2021/10/ceb.jpg",
      name: "විදුලි බල මණ්ඩලය ",
      status: false,
      description:
        "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
      path:"/pages/government/ceb"
    },

    {
      img: "/assests/hospital.jpg",
      name: "රෝහල",
      status: true,
      description:
        "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
      path:"/pages/government/hospital"
    },
    {
      img: "/assests/police.jpg",
      name: "පොලීසිය",
      status: false,
      description:
        "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
      path:"/pages/government/police"
    },
  ];
  return (
    <>
      <div className="flex flex-wrap md:mt-0 mt-6 w-full mx-auto justify-center items-center ">
        <PageHeader
          topic="රාජ්‍ය ආයතන"
          header="Well Come To Udududmbara"
          description="The Best Place to Check Availability of Government and Other Services."
        />

        {governmentData.map((data, index) => (
          <div
            key={index}
            className="relative flex flex-col md:mt-6 mt-10 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 m-4 hover:shadow-lg hover:bg-gray-100 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={()=>{
              router.push(data.path);
            }}
          >
            <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img
                src={data.img}
                alt="ui/ux review check"
                className="w-auto h-60"
              />
            </div>

            <div className={`p-6 ${true ? 'line-clamp-3' : ''}`}>
              <div className="flex items-center justify-between mb-3">
                <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                  {data.name}
                </h5>
                <div className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                  <div style={{ color: data.status ? "green" : "red" }}>
                    {data.status ? "Open" : "Close"}
                  </div>
                </div>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                {data.description}
              </p>
            </div>
            <div className="p-6 pt-3">
              <button
                className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                
              >
                Visit
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Government;
