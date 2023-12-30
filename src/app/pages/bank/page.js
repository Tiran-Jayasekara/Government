import React from "react";

const Bank = () => {
  const governmentData = [
    {
      img: "/assests/banks/peoples.png",
      name: "මහජන බැංකුව",
      status: false,
      description:
        "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
    },
    {
      img: "/assests/banks/boc.png",
      name: "ලංකා බැංකුව",
      status: true,
      description:
        "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
    },
    {
      img: "/assests/banks/rdb.png",
      name: "RDB බැංකුව",
      status: false,
      description:
        "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap mt-10 w-full mx-auto justify-center items-center ">
        <div className="flex flex-col bg-blue-600 w-full h-auto md:mt-0 mt-10 ">
          <h6 className=" text-white text-xm md:text-xl md:ml-10 ml-4 pb-2 font-sans py-4 mb-4">
            බැංකු
          </h6>
          <h1 className=" text-white font-bold text-xl md:text-4xl md:ml-10 ml-4 pb-2 font-sans">
            Well Come To Udududmbara
          </h1>
          <h6 className=" text-white text-xm md:text-xl md:ml-10 ml-4 pb-2 font-sans">
            The Best Place to Check Availability of Government and Other
            Services.{" "}
          </h6>
        </div>

        {governmentData.map((data, index) => (
          <div
            key={index}
            className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
          >
            <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img
                src={data.img}
                alt="ui/ux review check"
                className="w-auto h-60"
              />
            </div>

            <div className="p-6">
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
                Reserve
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bank;
