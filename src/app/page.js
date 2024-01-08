"use client";
import Footer from "@/components/Footer";
import PageLoadning from "@/components/PageLoading";
import PageHeader from "@/components/pageHeader";
import newsService from "@/service/newsService";
import { useEffect, useState } from "react";
import { CompanyName } from '@/components/utils';
import Map from "@/components/Map";


export default function Home() {
  const [showNewsModal, setNewsShowModal] = useState(false);
  const [selectNews, setSelectNews] = useState();
  const { getAllNews } = newsService();


  const [news, setNews] = useState();


  useEffect(() => {
    getAllNewsData();
  }, [])

  const getAllNewsData = async () => {
    const newsData = await getAllNews();
    if (newsData) {
      setNews(newsData.data.allNews);
    }
  }

  const updates = [
    {
      header: "2024 අවුරුදු උත්සවය",
      location: "Udadumbara Town",
      image: "https://archives1.sundayobserver.lk/sites/default/files/news/2017/04/05/z_jun-p07-Pillow-fight.jpg",
      date: "2024.01.02 සිට 2024.01.08 දක්වා ",
      time: "උදෑසන 8 ටේ සිට සවස 5 දක්වා",
      company: "ප්‍රාදේශීය මහ ලේකම් කාර්යාලය",
      description: "හෙට දිනයේදී මෙම ප්‍රදේශය  2024 අවුරුදු උත්සවය බව කරුණාවෙන් දන්වා සිටිමි",
    },
    {
      header: "තරුන සේවා වොලිබෝල් තරගාවලිය",
      location: "Udadumbara School Ground",
      image: "https://ncas.org.au/wp-content/uploads/2021/05/miguel-teirlinck-VDkRsT649C0-unsplash-2048x1365.jpg",
      date: "10.12.2023",
      time: "8am - 5pm",
      company: "ප්‍රාදේශීය මහ ලේකම් කාර්යාලය",
      description: "හෙට දිනයේදී මෙම ප්‍රදේශය  2024 අවුරුදු උත්සවය බව කරුණාවෙන් දන්වා සිටිමි",
    },
    {
      header: "මත්ද්‍රව්‍ය නිවාරණ වැඩසටහන",
      location: "Udadumbara School Hall",
      image: "https://mahamegha.lk/wp-content/uploads/2014/09/mathin-thor.jpg",
      date: "10.12.2023",
      time: "8am - 5pm",
      company: "පොලීසිය",
      description: "මත්ද්‍රව්‍ය නිවාරණ වැඩසටහන හෙට දිනයේ දී උඩුදුම්බර මධ්‍ය මහා විද්‍යාලීය ශ්‍රවණාගාරයේදී පැවැත්වීමට නියමිත වන බැවින් ඔබ සියලු දෙනාට ඒ සඳහා ආරාධනා කර සිටිමි..මීට පොලිස්පති w රූප සිංහ උඩුදුම්බර පොලිස් ස්ථානය.      ",
    },
    {
      header: "විදුලි කප්පාදුවක්",
      location: "Udadumbara , Gangoda , Kalunthanna , Bopana  ",
      image: "https://www.news.lk/media/k2/items/cache/ec907760afc6b04bf7f5a9519b72f55f_XL.jpg",
      date: "10.12.2023",
      time: "8am - 5pm",
      company: "විදුලි බල මණ්ඩලය",
      description: "ෙට දිනයේදී උඩ දුම්බර නගරය ඇතුළු ගංගොඩ කලුන්තැන්න මඩුගල්ල ආදී සියලු ප්‍රදේශවලට විදුලිය ඇනහිටීමක් සිදුවන බව කරුණාවෙන් දන්වා සිටිමි. අලුත්වැඩියා කටයුත්තක් හේතුවෙන් මෙම විදුලිය විසන්ධි කිරීමට සිදුවන බව කරුණාවෙන් දන්වා සිටිමි      ",
    }
  ];

  return (
    <>
      <div className="flex flex-wrap md:mt-0 mt-6 w-full mx-auto justify-center mb-20 bg-gradient-to-br from-white to-white " style={{
        backgroundImage: "url('')", // Replace with your actual image URL
      }}>
        <PageHeader
          topic="Home"
          header="Well Come To Udududmbara"
          description="The Best Place to Check Availability of Government and Other Services."
        />

        <div className="w-full">
          <img
            src="https://i.pinimg.com/originals/a8/26/7e/a8267e19e5adcbda3c3125d59a826a79.jpg"
            alt="card-image"
            className="w-full  mt-2 md:h-screen h-60"
          />
        </div>


        {/* News & Events */}
        <div className=" flex flex-wrap text-2xl mt-10 md:ml-10 ml-4 w-full font-semibold">
          <h1>News & Events</h1>
        </div>
        {news ? news.map((data, index) => (
          <div
            key={index}
            className="relative flex flex-col md:mt-6 mt-10 text-gray-700 bg-opacity-30 bg-white shadow-md bg-clip-border rounded-xl w-96 m-4 hover:scale-105 cursor-pointer"

          >
            <div className="relative h-56 mx-4 overflow-hidden text-white  rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img src={data.image} alt="" className="object-cover w-full md:h-56 mt-2 rounded-xl" />
              <span className="absolute top-0 left-0 px-2 py-1 mt-4 ml-2 text-xs text-white bg-blue-700">
                {CompanyName ? CompanyName.map((event) => (
                  data.company ? data.company === event.english ? event.sinhala : null : null
                )) : null}

              </span>
            </div>

            <div className="px-4 py-4 lg:px-2">
              {/* <a href="#" className="text-sm font-medium text-gray-600">
                {data.date}
              </a> */}
              <div className="w-8 pb-1 mb-4 border-b border-gray-600"></div>
              <h2 className="mt-2 mb-4 text-xl font-semibold text-gray-600">{data.header}</h2>
              <p className={`mb-4 text-sm text-gray-500 dark:text-gray-400 ${true ? 'line-clamp-4' : ''}`}>
                <b className=''>දිනය : </b>{data.date}<br></br>
                <b className=''>වේලාව : </b>{data.time}<br></br>
                <b className=''>ස්ථානය : </b>{data.location}<br></br><br></br>
                {data.description}
              </p>
            </div>

            <div className="p-4 pt-0">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
                onClick={() => {
                  setSelectNews(data);
                  setNewsShowModal(true);
                }}
              >
                වැඩි විස්තර
              </button>
            </div>
          </div>
        )) : <PageLoadning />}
      </div>




      {/* setNewsShowModal Section */}
      {showNewsModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-4">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}

                <div className="flex items-center justify-between p-5 w-full">
                  <span className="absolute md:flex hidden md:w-auto -mt-56 mx-auto ml-4 md:h-auto justify-start items-start text-xs p-2 text-white bg-blue-700">
                    {selectNews.company === "localCouncil" ? "ප්‍රාදේශීය මහ ලේකම් කාර්යාලය" : selectNews.company === "police" ? "පොලීසිය" : selectNews.company === "electricity" ? "විදුලි බල මණ්ඩලය" : null}</span>
                  <h3 className="md:text-2xl text-sm font-semibold justify-center items-center md:ml-10 md:mt-0 mt-8">
                    {selectNews.header}
                  </h3>
                  <div className="md:flex flex-wrap w-full items-center justify-center hidden">
                    <img src={selectNews.image} alt="card-image" className="md:w-96 mt-4 md:h-auto md:rounded-2xl justify-center items-center " />

                  </div>
                </div>
                <div className=" md:hidden flex flex-wrap w-full items-center justify-center">
                  <img src={selectNews.image} alt="card-image" className="md:w-96 w-80 h-auto rounded-xl mt-4 md:h-auto ml-6 mr-6 md:rounded-2xl justify-center items-center " />
                  <span className="absolute top-0 left-0 px-2 py-1 mt-2 ml-2 text-xs text-white bg-blue-700">
                    {selectNews.company}</span>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p>
                    <b>දිනය : </b>{selectNews.date}<br></br>
                    <b>වේලාව : </b>{selectNews.time}<br></br>
                    <b>ස්ථානය : </b>{selectNews.location}
                  </p>
                  <p className="my-4 text-blueGray-500 md:text-xl text-sm leading-relaxed text-justify">
                    <b>විස්තරය : </b>{selectNews.description}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setNewsShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setNewsShowModal(false)}
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

      <Footer />
      <Map/>
    </>
  );
}
