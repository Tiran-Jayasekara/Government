"use client";
import { GlobalContext } from '@/context';
import React, { useContext, useEffect, useState } from 'react'
// import { governmentCompanyData, governmentData } from "../../../../components/utils"
import { useParams } from 'next/navigation';
import newsService from '@/service/newsService';
import AdminService from '@/service/adminService';
import { adminAddNewsformControls } from '@/components/utils';
import CompanyService from '@/service/companyService';
import PageLoadning from '@/components/PageLoading';
import ButtonLoader from '@/components/ButtonLoader';

import { toast } from 'react-toastify';


const Company = () => {
    const { admin, setAdmin, availability } = useContext(GlobalContext);
    const [selectedService, setSelecteService] = useState();
    const [showServicesModal, setShowServicesModal] = useState(false);
    const params = useParams();
    const [adminCompany, setAdminCompany] = useState(params["company"])
    const [News, setNews] = useState();
    const [showModal, setShowModal] = useState(false);
    const [showNewsModal, setShowNewsModal] = useState(false);
    const [addNewsModal, setAddNewsModal] = useState(false);
    const [selectedUserData, setSelectedUserData] = useState();
    const [addNews, setAddNews] = useState();
    const [selectedNews, setSelecteNews] = useState();
    const { getAdmin, UpdateAdminStatus } = AdminService();
    const { getNewsByCompany, addNewNews, deleteNews, UpdateNews } = newsService();

    const [HeadsOfInstitutions, setHeadsOfInstitutions] = useState();

    const [governmentCompanyData, setGovernmentCompanyData] = useState()
    const [companyStatusForm, setCompanyStatusForm] = useState();

    const [adminStatusForm, setAdminStatusForm] = useState();

    const [buttonLoader, setButtonLoader] = useState();
    const { getCompanyData, UpdateCompanyStatus } = CompanyService();

    const [deleteNewsId, setDeleteNewsId] = useState();
    const [deleteModal, setDeleteModal] = useState(false);



    useEffect(() => {
        getCompanyDataByParams();
        getNews();
        getAdminDetails();

    }, [])

    const getCompanyDataByParams = async () => {

        const companyData = await getCompanyData(adminCompany);
        if (companyData) {
            setGovernmentCompanyData(companyData.data.CompanyData[0])

        } else {

        }
    }

    const updateNews = async () => {
        const updateNewsData = await UpdateNews(selectedNews);
        if (updateNewsData) {
            toast.success(updateNewsData.data.message, {
                icon: '✅',
                position: toast.POSITION.TOP_RIGHT,
            });
            getNews();
            setShowNewsModal(false)


        } else {
            toast.error("Update Unsuccess", {
                icon: '❗',
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }

    const AddNews = async () => {
        const addNesNewsData = await addNewNews(addNews)
        if (addNesNewsData) {
            setAddNewsModal(false);
            toast.success(addNesNewsData.data.message, {
                icon: '✅',
                position: toast.POSITION.TOP_RIGHT,
            });
            getNews();
        } else {
            toast.error("Add News Unsuccess", {
                icon: '❗',
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }

    const DeleteNews = async () => {
        console.log(deleteModal);
        const deleteNewsStatus = await deleteNews(deleteNewsId)
        if (deleteNewsStatus) {
            setDeleteModal(false)

            toast.success(deleteNewsStatus.data.message, {
                icon: '✅',
                position: toast.POSITION.TOP_RIGHT,
            });
            getNews();

        } else {
            setDeleteModal(false)
            toast.error("Delete News Unsuccess", {
                icon: '❗',
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }
    const getAdminDetails = async () => {
        const HeadsOfInstitutions = await getAdmin(adminCompany);
        setHeadsOfInstitutions(HeadsOfInstitutions ? HeadsOfInstitutions.data.AdminByCompany : null)
    }

    const handleRadioChange = async () => {
        setButtonLoader(true)
        const companyStatus = await UpdateCompanyStatus(companyStatusForm);
        if (companyStatus) {
            setButtonLoader(false);

            toast.success(companyStatus.data.message, {
                icon: '✅',
                position: toast.POSITION.TOP_RIGHT,
            });

        } else {
            setButtonLoader(false);
            toast.error("Company Status Update Unsuccess", {
                position: toast.POSITION.TOP_RIGHT,
                icon: '❗',
            });
        }

        // alert(radioValue === "true" ? "Open" : "Close")
    };

    const UpdatAdminStatus = async () => {
        const adminData = await UpdateAdminStatus(adminStatusForm)
        if (adminData) {
            setSelectedUserData({
                ...selectedUserData,
                status: adminData.data.updateAdmin.status,
            });
            getAdminDetails();
            toast.success(adminData.data.message, {
                icon: '✅',
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            toast.error("Update Admin Status Unsuccess", {
                icon: '❗',
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }

    const getNews = async () => {
        const newsData = await getNewsByCompany(adminCompany);
        setNews(newsData ? newsData.data.NewsByCompany : null);
    }

    return (
        <>
            {governmentCompanyData ? <div className="w-full flex md:flex-none flex-wrap  md:mt-4 mt-16 bg-gradient-to-r from-blue-100  to-red-100">
                {/* Header Section */}
                <section className="pb-0 w-full ">
                    <div className="relative mb-20 h-96">
                        <img className="object-cover w-full md:h-full h-60" src={governmentCompanyData ? governmentCompanyData.coverimg : "no data"} alt="" />
                        <img className="absolute bottom-0 left-0 object-cover w-40 h-40 ml-4 mb-16 rounded-full lg:ml-12 lg:-mb-24 lg:w-60 lg:h-60"
                            src={governmentCompanyData ? governmentCompanyData.profileimg : "No data"} alt="" />
                    </div>
                    <div className="w-ful px-0 mx-auto text-center mb-0 md:-mt-20 -mt-60">
                        <div className="flex flex-col bg-blue-600 w-full h-auto md:mt-0 mt-10 ">

                            <h1 className=" text-white font-bold text-xl md:text-4xl md:ml-10 ml-40 pb-2 font-sans mt-10">
                                {governmentCompanyData ? governmentCompanyData.name : "No Data"}
                            </h1>
                            <h6 className=" text-white text-xm md:text-xl md:ml-10 ml-40 pb-2 font-sans mb-4 md:mb-8">
                                {governmentCompanyData ? governmentCompanyData.city : "No data"}
                            </h6>
                        </div>
                    </div>
                </section>

                {/* set Company Open Or Close */}
                {admin === adminCompany ?
                    <div className='w-full mx-auto flex flex-col mb-10'>
                        <div className="w-80 mb-6 mt-10 justify-center items-center mx-auto">
                            <label className="mr-2">
                                <input type="radio" value="true" name="inline-radio"
                                    className="w-6 h-6 bg-blue-600 text-blue-600 border-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200  "
                                    onChange={(event) => {
                                        setCompanyStatusForm({
                                            ...companyStatusForm,
                                            status: event.target.value,
                                            _id: governmentCompanyData._id,
                                            company: governmentCompanyData.company
                                        })
                                    }}

                                />
                                <span className="ml-2 text-blue-600 font-bold text-4xl">Open</span>
                            </label>
                            <label className='ml-6'>
                                <input type="radio" name="inline-radio" value="false"
                                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-offset-blue-200"
                                    onChange={(event) => {
                                        setCompanyStatusForm({
                                            ...companyStatusForm,
                                            status: event.target.value,
                                            _id: governmentCompanyData._id,
                                            company: governmentCompanyData.company,
                                        })
                                    }}

                                />
                                <span className="ml-2 text-red-600 font-bold text-4xl">Close</span>
                            </label>
                        </div>

                        {buttonLoader ? <ButtonLoader name={"save"} /> : <button
                            className="w-80 mx-auto px-4 py-2 cursor-pointer text-gray-100 bg-blue-500 rounded hover:bg-blue-600"
                            onClick={() => {
                                handleRadioChange();
                            }}
                        >
                            Save
                        </button>}

                    </div> : null}


                {/* About Us Section */}
                <section className="w-full flex items-center xl:h-screen font-poppins -mt-8">
                    <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                        <div className="flex flex-wrap ">
                            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                                <div className="relative lg:max-w-md">
                                    <img src={governmentCompanyData ? governmentCompanyData.aboutUsimg : "No Data"} alt="aboutimage"
                                        className="relative z-10 object-cover w-full rounded h-96 hidden md:flex" />
                                </div>
                            </div>
                            <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                                <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
                                    <span className="text-sm text-gray-600 uppercase ">Who we are?</span>
                                    <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl ">
                                        About Us
                                    </h1>
                                </div>
                                <p className="mb-0 text-base leading-7 text-gray-500 text-justify">
                                    <b>Our Vision</b><br></br>
                                    {governmentCompanyData ? governmentCompanyData.vision : "No Data"}<br></br><br></br>
                                    <b>Our Mission</b><br></br>
                                    {governmentCompanyData ? governmentCompanyData.mission : "No Data"}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Our Services Section */}
                <section className="w-full flex items-center  lg:h-screen font-poppins mt-0 md:-mt-20 2xl:-mt-40">
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
                                    {governmentCompanyData ? governmentCompanyData.whatWeDo : "No Data"}
                                </p>
                                {governmentCompanyData && governmentCompanyData.services.map((data, index) => (
                                    <ul key={index} className="mb-2 cursor-pointer hover:scale-105" onClick={() => (
                                        setShowServicesModal(true),
                                        setSelecteService(data)
                                    )} >
                                        <li className="flex items-center mb-4 text-base text-gray-600 ">
                                            <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="w-5 h-5 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                                </svg>
                                            </span>
                                            {data.name}
                                        </li>
                                    </ul>
                                ))}
                            </div>
                            <div className=" w-full px-4 mb-10 md:w-1/2 lg:mb-0">
                                <img src={governmentCompanyData ? governmentCompanyData.whatWeDoUsimg : "No Data"} alt=""
                                    className="z-40 object-cover w-full rounded-md md:h-96 h-44" />
                                <div className="absolute top-0 right-0 items-center justify-center hidden -mt-16 lg:inline-flex">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* News and Events Section */}
                <div className="px-4 mb-0 md:text-center md:mb-0 mx-auto w-full md:mt-20 mt-10 2xl:mt-20">
                    <div className="pl-4 mb-6 border-l-4 border-blue-500 md:border-none ">
                        <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl ">
                            News & Events
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

                {/* Add News Button */}
                <div className='w-full flex flex-wrap  justify-center md:mx-20'>
                    {admin === adminCompany ? <button
                        className="bg-emerald-500 w-full md:mx-60 mx-10 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                            setAddNewsModal(true)
                        }
                        }
                    >
                        Add New News
                    </button> : null}


                    {/* Map News */}
                    {News ? News.map((data, index) => (
                        <div
                            key={data._id}
                            className=" bg-opacity-30 relative flex flex-col md:mt-6 mt-0 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 m-4 hover:shadow-lg  hover:transform hover:scale-105  cursor-pointer"
                        >
                            <div className="relative h-56 mx-4 overflow-hidden text-white  rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                <img src={data.image} alt="card-image" className="mt-4 rounded-xl" />
                            </div>
                            <div className="p-4 m-4 ml-2 mt-0 lg:px-2 ">
                                <a href="#" className="text-sm font-medium text-gray-600 ">
                                    {data.date}
                                </a>
                                <div className="w-8 pb-1 mb-4 border-b border-gray-600 "></div>
                                <h2 className="mt-2 mb-4 text-xl font-semibold text-gray-600  ">
                                    {data.header}</h2>
                                <p className={`mb-4 text-sm text-gray-500 dark:text-gray-400 ${true ? 'line-clamp-4' : ''}`}>
                                    <b className=''>දිනය : </b>{data.date}<br></br>
                                    <b className=''>වේලාව : </b>{data.time}<br></br>
                                    <b className=''>ස්ථානය : </b>{data.location}<br></br><br></br>
                                    {data.description}
                                </p>

                            </div>
                            <div className="p-4 pt-0">
                                {admin === adminCompany ? <div className='flex flex-row justify-between'><button
                                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                    type="button"
                                    onClick={() => {
                                        setSelecteNews(data)
                                        setShowNewsModal(true)
                                    }}
                                >
                                    Edit
                                </button><button
                                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                    type="button"
                                    onClick={() => {
                                        setDeleteNewsId(data._id);
                                        setDeleteModal(true)

                                    }}
                                >
                                        Delete
                                    </button></div> : <button
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                        type="button"
                                        onClick={() => {
                                            setSelecteNews(data)
                                            setShowNewsModal(true)
                                        }}
                                    >
                                    වැඩි විස්තර
                                </button>}
                            </div>
                        </div>
                    )) : "No News"}
                </div>


                {/* Check ආයතන ප්‍රධානීන් Availability */}
                <div className="w-full  bg-opacity-30 bg-white shadow-md bg-clip-border rounded-xl md:m-20 m-4 hover:shadow-lg hover:bg-gray-100 hover:transform  cursor-pointer p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold leading-none text-gray-900 ">ආයතන ප්‍රධානීන්</h3>
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            View all
                        </a>
                    </div>



                    <div className="flow-root ">
                        <ul role="list" className="divide-y  ">
                            {HeadsOfInstitutions ? HeadsOfInstitutions.map((user, index) => (

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
                            )) : "No data"}
                        </ul>
                    </div>
                </div>
            </div> : <PageLoadning />}


            {/* This is for members Availability Modal */}
            {showModal ? (
                <>
                    <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none m-4">
                        <div className="relative my-6 mx-auto w-auto">
                            {/*content*/}
                            <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full outline-none focus:outline-none ">
                                {/*header*/}

                                <section className="flex flex-col items-center mt-10 bg-stone-50 md:w-96 w-auto h-auto font-poppins rounded-xl md:mx-0 mx-2 ">
                                    <div className="justify-center  px-4 py-6 mx-auto ">
                                        <div className="flex items-center justify-around">

                                            <div className="max-w-4xl mx-auto">
                                                <div className="flex flex-wrap items-center -mx-4">
                                                    <div className="w-full px-4 mb-10">
                                                        <h2 className="mb-4 text-4xl font-bold  mt-8 md:mt-0 justify-center items-center mx-auto">
                                                            {selectedUserData.name}
                                                        </h2>
                                                        <p className="mb-4 text-base text-gray-500  ">{selectedUserData.role}</p>
                                                        <div className='mb-10' style={{ color: selectedUserData.status ? "green" : "red" }}>
                                                            {selectedUserData.status ? "ඉන්නවා" : "නිවාඩු"}
                                                        </div>

                                                        <p className="mb-6 text-lg text-gray-500  text-justify">
                                                            {selectedUserData.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {admin === adminCompany ?
                                            <div className='w-full mx-auto flex flex-col mb-10'>
                                                <div className="w-80 mb-6 mt-10 justify-center items-center mx-auto">
                                                    <label className="mr-2">
                                                        <input type="radio" value="true" name="inline-radio"
                                                            className="w-6 h-6 bg-blue-600 text-blue-600 border-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200  "
                                                            onChange={(event) => {
                                                                setAdminStatusForm({
                                                                    ...adminStatusForm,
                                                                    status: event.target.value,
                                                                    _id: selectedUserData._id,
                                                                    company: selectedUserData.company
                                                                })
                                                            }}

                                                        />
                                                        <span className="ml-2 text-blue-600 font-bold text-xl">Available</span>
                                                    </label>
                                                    <label className='ml-6'>
                                                        <input type="radio" name="inline-radio" value="false"
                                                            className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-offset-blue-200"
                                                            onChange={(event) => {
                                                                setAdminStatusForm({
                                                                    ...adminStatusForm,
                                                                    status: event.target.value,
                                                                    _id: selectedUserData._id,
                                                                    company: selectedUserData.company
                                                                })
                                                            }}

                                                        />
                                                        <span className="ml-2 text-red-600 font-bold text-xl">Not Available</span>
                                                    </label>
                                                </div>

                                                {buttonLoader ? <ButtonLoader name={"save"} /> : <button
                                                    className="w-80 mx-auto px-4 py-2 cursor-pointer text-gray-100 bg-blue-500 rounded hover:bg-blue-600"
                                                    onClick={() => {
                                                        UpdatAdminStatus()
                                                    }}
                                                >
                                                    Update
                                                </button>}

                                            </div> : null}
                                        <div className="flex justify-end items-end ml-auto p-6">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Close
                                            </button>
                                            {admin ? null : <button
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                OK
                                            </button>}

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
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-4 md:mx-40">
                        <div className="relative w-auto my-6 mx-auto ">
                            {/*content*/}
                            <div className="w-full border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                                {/*header*/}
                                {admin === adminCompany ? <section className="w-full h-auto">
                                    <div className="px-4 mx-auto ">
                                        <div className="p-8 px-4 bg-white">
                                            <div className="md:mt-40">
                                                <div>

                                                    {adminAddNewsformControls.map((controlItem, index) => (
                                                        <div className="px-4 mb-6" key={controlItem.id}>
                                                            <label className="block mb-2 text-sm font-medium">{controlItem.label}</label>

                                                            {controlItem.id === 'description' ? (
                                                                <textarea
                                                                    className="block w-80 md:w-96 h-40 px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                                    name=""
                                                                    placeholder={selectedNews[controlItem.placeholder]}
                                                                    value={selectedNews[controlItem.value]}
                                                                    onChange={(event) => {
                                                                        setSelecteNews({
                                                                            ...selectedNews,
                                                                            [controlItem.id]: event.target.value,
                                                                        })
                                                                    }}
                                                                />
                                                            ) : (
                                                                <input
                                                                    className="block w-80 md:w-96 px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                                    type="text"
                                                                    name=""
                                                                    placeholder={selectedNews[controlItem.placeholder]}
                                                                    value={selectedNews[controlItem.value]}
                                                                    onChange={(event) => {
                                                                        setSelecteNews({
                                                                            ...selectedNews,
                                                                            [controlItem.id]: event.target.value,
                                                                        })
                                                                    }}
                                                                />
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section> : <>
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
                                        <p>
                                            <b>දිනය : </b>{selectedNews.date}<br></br>
                                            <b>වේලාව : </b>{selectedNews.time}<br></br>
                                            <b>ස්ථානය : </b>{selectedNews.location}
                                        </p>
                                        <p className="my-4 text-blueGray-500 md:text-xl text-sm leading-relaxed text-justify">
                                            <b>විස්තරය : </b>{selectedNews.description}
                                        </p>
                                    </div>
                                </>}

                                {/*footer*/}
                                <div className="flex items-center justify-end p-6">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowNewsModal(false)}
                                    >
                                        Close
                                    </button>
                                    {admin === adminCompany ? <button
                                        className="bg-emerald-500 mr-4 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            updateNews()
                                        }
                                        }
                                    >
                                        Update
                                    </button> : <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setShowNewsModal(false)
                                        }
                                        }
                                    >
                                        OK
                                    </button>}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

            {/* Add News Modal */}
            {addNewsModal ? (
                <>
                    <div className="justify-center items-center flex flex-wrap overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-4">
                        <div className="relative w-auto my-6 mx-auto ">
                            {/*content*/}
                            <div className="w-full border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                                {/*header*/}
                                {admin === adminCompany ? <section className="w-full h-auto">
                                    <div className="px-4 mx-auto ">
                                        <div className="p-8 px-4 bg-white">
                                            <div className="md:mt-0">
                                                <div>

                                                    {adminAddNewsformControls ? adminAddNewsformControls.map((controlItem, index) => (
                                                        <div className="px-4 mb-6" key={controlItem.id}>
                                                            <label className="block mb-2 text-sm font-medium">{controlItem.label}</label>

                                                            {controlItem.id === 'description' ? (
                                                                <textarea
                                                                    className="block w-80 md:w-96 h-40 px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                                    name=""
                                                                    placeholder={controlItem.placeholder}
                                                                    onChange={(event) => {
                                                                        setAddNews({
                                                                            ...addNews,
                                                                            [controlItem.id]: event.target.value,
                                                                            company: adminCompany
                                                                        })
                                                                    }}
                                                                />
                                                            ) : (
                                                                <input
                                                                    className="block w-80 md:w-96 px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded"
                                                                    type="text"
                                                                    name=""
                                                                    placeholder={controlItem.placeholder}
                                                                    onChange={(event) => {
                                                                        setAddNews({
                                                                            ...addNews,
                                                                            [controlItem.id]: event.target.value,
                                                                            company: adminCompany
                                                                        })
                                                                    }}
                                                                />
                                                            )}
                                                        </div>
                                                    )) : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section> : null}

                                {/*footer*/}
                                <div className="flex items-center justify-end p-6">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setAddNewsModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 mr-4 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            AddNews()
                                        }
                                        }
                                    >
                                        Add
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

            {/* Delete News Modal */}
            {deleteModal ? <>
                <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Toggle modal
                </button>

                <div id="popup-modal" className="overflow-y-auto mx-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">

                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-4 md:p-5 text-center">

                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this News?</h3>
                                <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2" onClick={() => { DeleteNews() }}>
                                    Yes, I'm sure
                                </button>
                                <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => { setDeleteModal(false) }}>No, cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </> : null}

            {/* This Modal for Services */}
            {showServicesModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-4">
                        <div className="relative w-auto my-6 mx-auto ">
                            {/*content*/}
                            <div className="w-full border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center justify-between p-5 w-full">
                                    <h3 className="md:text-2xl text-sm font-semibold justify-center items-center md:ml-10">
                                        {selectedService.header}
                                    </h3>
                                    <div className="md:flex flex-wrap w-full items-center justify-center hidden">
                                        <img src={selectedService.img} alt="card-image" className="md:w-96 mt-4 md:h-auto md:rounded-2xl justify-center items-center " />
                                    </div>
                                </div>
                                <div className=" md:hidden flex flex-wrap w-full items-center justify-center">
                                    <img src={selectedService.img} alt="card-image" className="md:w-96 w-80 h-48 rounded-xl mt-4 md:h-auto ml-6 mr-6 md:rounded-2xl justify-center items-center " />
                                </div>
                                {/*body*/}

                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 md:text-xl text-sm leading-relaxed text-justify">
                                        <b>විස්තරය : </b>{selectedService.description}
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

export default Company