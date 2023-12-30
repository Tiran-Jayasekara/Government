"use client"
import React, { useState } from 'react'

const CEB = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState();
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [showServicesModal, setShowServicesModal] = useState(false);
  const [selectedNews, setSelecteNews] = useState();
  const [selectedService, setSelecteService] = useState();

  const HeadsOfInstitutions = [{
    name: "Tiran",
    mobile: "0714055143",
    role: "සභාපති",
    status: true,
  },
  {
    name: "Jayasekara",
    mobile: "0757026373",
    role: "ලේකම්",
    status: false,
  },
  {
    name: "Tiran",
    mobile: "0714055143",
    role: "සභාපති",
    status: true,
  },
  {
    name: "Jayasekara",
    mobile: "0757026373",
    role: "ලේකම්",
    status: false,
  },
  ]

  const CEBNews = [{
    header: "Power Cut",
    location: "Udadumbara Town",
    image: "https://newsradio.lk/wp-content/uploads/2022/02/power-cut-728x375-1.jpg",
    date: "10.12.2023",
    time: "8am - 5pm",
    description: "හෙට දිනයේදී මෙම ප්‍රදේශයට  විදුලිය කප්පාදු කිරීමක් සිදුකරන බව කරුණාවෙන් දන්වා සිටිමි",
  },
  {
    header: "Power Cut",
    location: "Udadumbara Town",
    image: "https://newsradio.lk/wp-content/uploads/2022/02/power-cut-728x375-1.jpg",
    date: "10.12.2023",
    time: "8am - 5pm",
    description: "හෙට දිනයේදී මෙම ප්‍රදේශයට  විදුලිය කප්පාදු කිරීමක් සිදුකරන බව කරුණාවෙන් දන්වා සිටිමි",
  }
  ]

  const CEBServices = [{
    header: "උප්පැන්න සහතික ලබා ගැනීම",
    image: "https://adaderanaenglish.s3.amazonaws.com/1595501991-sri-lanka-national-birth-cirtificate.jpg",
    date: "",
    description: "උප්පැන්න සහතික ලබා ගැනීම සඳහා ඔබගේ ජාතික හැඳුනුම්පත හෝ තැපැල් හැඳුනුම්පත සමග පැමිණිය යුතුයි.උප්පැන්න සහතික ලබා ගැනීම සඳහා ඔබගේ ජාතික හැඳුනුම්පත හෝ තැපැල් හැඳුනුම්පත සමග පැමිණිය යුතුයි    "
  },
  {
    header: "ඉඩම් ඔප්පු ගැටලු",
    image: "https://2.bp.blogspot.com/--wzBP_Cku3k/VS0-YslVEJI/AAAAAAAALlQ/uELdK2aTSpE/s1600/Survey%2BPlan%2BPage%2B1.jpg",
    date: "",
    description: "උප්පැන්න සහතික ලබා ගැනීම සඳහා ඔබගේ ජාතික හැඳුනුම්පත හෝ තැපැල් හැඳුනුම්පත සමග පැමිණිය යුතුයි.උප්පැන්න සහතික ලබා ගැනීම සඳහා ඔබගේ ජාතික හැඳුනුම්පත හෝ තැපැල් හැඳුනුම්පත සමග පැමිණිය යුතුයි"
  }
    , {
    header: "මරණ සහතික",
    image: "https://www.certificateof.com/wp-content/uploads/2018/05/death-certificate-template-lhprpklt.jpg",
    date: "",
    description: "උප්පැන්න සහතික ලබා ගැනීම සඳහා ඔබගේ ජාතික හැඳුනුම්පත හෝ තැපැල් හැඳුනුම්පත සමග පැමිණිය යුතුයි.උප්පැන්න සහතික ලබා ගැනීම සඳහා ඔබගේ ජාතික හැඳුනුම්පත හෝ තැපැල් හැඳුනුම්පත සමග පැමිණිය යුතුයි"
  },
  {
    header: "විවාහ සහතික",
    image: "https://cdn1.vectorstock.com/i/1000x1000/47/80/vintage-marriage-certificate-vector-1104780.jpg",
    date: "",
    description: "උප්පැන්න සහතික ලබා ගැනීම සඳහා ඔබගේ ජාතික හැඳුනුම්පත හෝ තැපැල් හැඳුනුම්පත සමග පැමිණිය යුතුයි.උප්පැන්න සහතික ලබා ගැනීම සඳහා ඔබගේ ජාතික හැඳුනුම්පත හෝ තැපැල් හැඳුනුම්පත සමග පැමිණිය යුතුයි"
  }
  ]


  return (
    <>
      <div className="w-full flex md:flex-none flex-wrap  md:mt-4 mt-16 bg-gradient-to-r from-blue-100  to-red-100">

        {/* Header */}
        <section className="pb-0 w-full ">
          <div className="relative mb-20 h-96">
            <img className="object-cover w-full md:h-full h-60" src="https://www.livemint.com/lm-img/img/2023/10/15/1600x900/power_outage_1687234377015_1697350225424.JPG" alt="" />
            <img className="absolute bottom-0 left-0 object-cover w-40 h-40 ml-4 mb-16 rounded-full lg:ml-12 lg:-mb-24 lg:w-60 lg:h-60" src="https://seeklogo.com/images/C/ceylon-electricity-board-logo-80B39CEA11-seeklogo.com.png" alt="" />
          </div>
          <div className="w-ful px-0 mx-auto text-center mb-0 md:-mt-20 -mt-60">
            <div className="flex flex-col bg-blue-600 w-full h-auto md:mt-0 mt-10 ">

              <h1 className=" text-white font-bold text-xl md:text-4xl md:ml-10 ml-40 pb-2 font-sans mt-10">
              ශ්‍රී ලංකා විදුලි බල මණ්ඩලය
              </h1>
              <h6 className=" text-white text-xm md:text-xl md:ml-10 ml-40 pb-2 font-sans mb-4 md:mb-8">
                උඩුදුම්බර
              </h6>
            </div>
          </div>
        </section>


        <section className="w-full flex items-center xl:h-screen font-poppins ">
          <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap ">
              <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <div className="relative lg:max-w-md">
                  <img src="https://www.propointelectrical.com.au/wp-content/uploads/2021/07/Meter-Box-Replacement-scaled.jpeg" alt="aboutimage"
                    className="relative z-10 object-cover w-full rounded h-96 hidden md:flex" />

                  <div
                    className="hidden md:flex absolute mt-40 bottom-0 right-0 z-10 p-8 bg-white border-4 border-blue-500 rounded shadow  ">
                    <p className="text-lg font-semibold md:w-72">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        className="absolute top-0 left-0 w-16 h-16 text-blue-700 opacity-10"
                        viewBox="0 0 16 16">
                        <path
                          d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                        </path>
                      </svg> Successfully Providing Services from 25 years
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
                  <span className="text-sm text-gray-600 uppercase ">Who we are?</span>
                  <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl ">
                    About Us
                  </h1>
                </div>
                <p className="mb-6 text-base leading-7 text-gray-500 text-justify">
                  <b>Our Vision</b><br></br>
                  Become the Leading Secretariat in Sri Lanka Providing Excellent , productive and Efficient Service<br></br><br></br>
                  <b>Our Mission</b><br></br>
                  To uplife living strandard at the people in the division thoought the implementation of planned development programs with the participation at the public,managing the resources in area

                </p>
                <a href="#"
                  className="px-4 py-2 text-gray-100 bg-blue-500 rounded hover:bg-blue-600">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>




        <section className="w-full flex items-center  lg:h-screen font-poppins">
          <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="px-4 mb-10 md:text-center md:mb-20">
              <div className="pl-4 mb-6 border-l-4 border-blue-500 md:border-none ">
                <span className="text-sm text-gray-600 uppercase ">Who we are?</span>
                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl ">
                  What We Do
                </h1>
              </div>
              <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
                <div className="flex-1 h-2 bg-blue-200">
                </div>
                <div className="flex-1 h-2 bg-blue-400">
                </div>
                <div className="flex-1 h-2 bg-blue-300">
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center">
              <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
                <h2 className="mb-4 text-2xl font-bold text-gray-700 ">
                  Our Services
                </h2>
                <p className="mb-4 text-base leading-7 text-gray-500 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                {CEBServices && CEBServices.map((data, index) => (
                  <ul key={index} className="mb-2 cursor-pointer hover:scale-105" onClick={() => (
                    setShowServicesModal(true),
                    setSelecteService(data)
                  )}>
                    <li className="flex items-center mb-4 text-base text-gray-600 ">
                      <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                          <path
                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                      </span>
                      {data.header}
                    </li>
                  </ul>
                ))}

              </div>
              <div className=" w-full px-4 mb-10 md:w-1/2 lg:mb-0">
                <img src="http://www.udadumbara.ds.gov.lk/images/5.jpg" alt=""
                  className="z-40 object-cover w-full rounded-md md:h-96 h-44" />
                <div className="absolute top-0 right-0 items-center justify-center hidden -mt-16 lg:inline-flex">

                </div>
              </div>
            </div>
          </div>
        </section>




        <div className="mb-0 w-full md:ml-20 ml-6 mt-10">
          <h1 className="md:text-4xl text-xl font-bold capitalize  text-black mb-6"> News & Events</h1>
        </div>
        <div className='w-full flex flex-wrap mx-auto justify-center'>

          {CEBNews.map((data, index) => (
            <div
              key={index}

              className=" bg-opacity-30 relative flex flex-col md:mt-6 mt-0 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 m-4 hover:shadow-lg  hover:transform hover:scale-105  cursor-pointer"
              onClick={() => {
                setSelecteNews(data)
                setShowNewsModal(true)
              }}
            >
              <div className="relative h-56 mx-4 overflow-hidden text-white  rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img src={data.image} alt="card-image" className="" />
              </div>
              <div className="p-4 m-4 lg:px-2 ">
                <a href="#" className="text-sm font-medium text-gray-600 ">
                  {data.date}
                </a>
                <div className="w-8 pb-1 mb-4 border-b border-gray-600 "></div>
                <h2 className="mt-2 mb-4 text-xl font-semibold text-gray-600  ">
                  {data.header}</h2>
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  {data.time}<br></br>
                  {data.location}<br></br>
                  {data.description}
                </p>

              </div>
              <div className="p-4 pt-0">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full backdrop-blur-md bg-opacity-30 bg-white shadow-md bg-clip-border rounded-xl m-4 hover:shadow-lg hover:bg-gray-100 hover:transform  cursor-pointer p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold leading-none text-gray-900 ">ආයතන ප්‍රධානීන්</h3>
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              View all
            </a>
          </div>



          <div className="flow-root ">
            <ul role="list" className="divide-y  ">
              {HeadsOfInstitutions.map((user, index) => (

                <li key={index} className="py-3 sm:py-4 cursor-pointer" onClick={() => {
                  setSelectedUserData(user)
                  setShowModal(true)
                }}>
                  <div className="flex items-center space-x-4" >
                    <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate ">
                        {user.mobile}
                      </p>
                      <p className="text-sm text-gray-500 truncate ">
                        {user.role}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <div style={{ color: user.status ? "green" : "red" }}>
                        {user.status ? "ඉන්නවා" : "නිවාඩු"}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>




      {/* Check ආයතන ප්‍රධානීන් Availability */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-4">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}

                <section className="flex items-center mt-10 bg-stone-50 xl:h-screen font-poppins dark:bg-gray-800 rounded-xl">
                  <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
                    <div className="flex items-center justify-around">

                      <div className="max-w-4xl mx-auto">
                        <div className="flex flex-wrap items-center -mx-4">
                          <div className="w-full px-4 mb-10 lg:w-1/2 ">
                            <h2 className="mb-4 text-4xl font-bold dark:text-gray-300 mt-8 md:mt-0 justify-center items-center mx-auto">
                              {selectedUserData.name}
                            </h2>
                            <p className="mb-4 text-base text-gray-500 dark:text-gray-400">{selectedUserData.role}</p>
                            <div className='mb-10' style={{ color: selectedUserData.status ? "green" : "red" }}>
                              {selectedUserData.status ? "ඉන්නවා" : "නිවාඩු"}
                            </div>

                            <p className="mb-6 text-lg text-gray-500 dark:text-gray-400 text-justify">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor incididunt ut
                              labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <div className="flex items-center justify-start">
                              <a className="inline-block mr-5 text-blue-800 bi bi-facebook dark:text-gray-400 " href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                  className="w-6 h-6 " viewBox="0 0 16 16">
                                  <path
                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                              </a>
                              <a className="inline-block mr-5 text-blue-500 dark:text-gray-400" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                  className="w-6 h-6 bi bi-twitter" viewBox="0 0 16 16">
                                  <path
                                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                              </a>
                              <a className="inline-block text-pink-600 dark:text-gray-400" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                  className="w-6 h-6 bi bi-instagram" viewBox="0 0 16 16">
                                  <path
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="w-full md:flex hidden px-4 mb-10 lg:w-1/2 ">
                            <img src="https://i.postimg.cc/RhQYkKYk/pexels-italo-melo-2379005.jpg" alt=""
                              className="object-cover w-full mb-6 rounded-lg h-96" />

                          </div>
                        </div>
                      </div>


                    </div>
                    <div className="flex items-center justify-end p-6">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        OK
                      </button>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}


      {/* This modal For News */}
      {showNewsModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-4">
            <div className="relative w-auto my-6 mx-auto ">
              {/*content*/}
              <div className="w-full border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5 w-full">
                  <h3 className="md:text-2xl text-sm font-semibold justify-center items-center md:ml-10">
                    {selectedNews.header}
                  </h3>
                  <div className="md:flex flex-wrap w-full items-center justify-center hidden">
                    <img src={selectedNews.image} alt="card-image" className="md:w-96 mt-4 md:h-auto md:rounded-2xl justify-center items-center " />
                  </div>
                </div>
                <div className=" md:hidden flex flex-wrap w-full items-center justify-center">
                  <img src={selectedNews.image} alt="card-image" className="md:w-96 w-80 h-auto rounded-xl mt-4 md:h-auto ml-6 mr-6 md:rounded-2xl justify-center items-center " />
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 md:text-xl text-sm leading-relaxed text-justify">
                    {selectedNews.description}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowNewsModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowNewsModal(false)}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}




      {/* This Modal for Services */}
      {showServicesModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-4">
            <div className="relative w-92 my-6 mx-auto ">
              {/*content*/}
              <div className="w-auto md:mx-40  rounded-xl shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex flex-col items-center justify-center p-5 w-full">
                  <h3 className="">
                    {selectedService.header}
                  </h3>
                  <div className="md:flex flex-wrap w-full items-center justify-center hidden">
                    <img src={selectedService.image} alt="card-image" className="md:w-96 mt-4 md:h-40  md:rounded-2xl justify-center items-center " />
                  </div>
                </div>
                <div className=" md:hidden flex flex-wrap w-full items-center justify-center">
                  <img src={selectedService.image} alt="card-image" className="md:w-96 w-80 h-40 rounded-xl mt-4 md:h-auto ml-6 mr-6 md:rounded-2xl justify-center items-center " />
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto w-96">
                  <p className="my-4 text-blueGray-500 md:text-xl text-sm leading-relaxed text-justify">
                    {selectedService.description}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowServicesModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowServicesModal(false)}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}






    </>
  )
}

export default CEB