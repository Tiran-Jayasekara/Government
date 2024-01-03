"use client"
import React, { useContext, useState } from 'react'
import { GlobalContext } from '@/context';
import { useRouter } from 'next/navigation';
import AdminService from '@/service/adminService';

const Profile = () => {
    const { availability, setAvailability, adminDetails, setAdminDetails } = useContext(GlobalContext);
    const [formData, setFormData] = useState();
    const { UpdateAdmin } = AdminService();
    const router = useRouter();


    const updateAdminDetails = async () => {
        if (formData) {
            const AdminUpdateStatus = await UpdateAdmin(formData);
            if (AdminUpdateStatus ? AdminUpdateStatus.data.message === "Update Success" : alert("Please Login Again")) {
                setAdminDetails(AdminUpdateStatus.data.updateAdmin);
                localStorage.setItem("admin", JSON.stringify(AdminUpdateStatus.data.updateAdmin));
            } else {
                console.log("Update Admin Status UnSuccess");
            }
            alert(AdminUpdateStatus ? AdminUpdateStatus.data.message : alert("Please Login Again"))
        } else {
            alert("Pleace Choose Availability")
        }
        // router.push("/pages/government/pradeshiya_sabha")
    }



    return (
        <section className="w-full flex items-center justify-center h-screen font-poppins bg-gradient-to-r from-blue-200  to-green-200">
            <div className="flex-1">
                <div className="px-2 mx-auto ">
                    <div className="relative ">
                        <div className="relative px-4 py-4 bg-gray-100 shadow-md mx-2 rounded-xl md:mx-80 md:py-11 sm:px-8">
                            <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 ">
                                <div className="overflow-hidden rounded-t-lg">
                                    <img src="https://i.postimg.cc/7hBDr1vC/pexels-rodnae-productions-7005064.jpg" alt=""
                                        className="object-cover object-top w-full h-48" />
                                </div>
                                <div className="relative w-32 h-32 mx-auto -mt-16 overflow-hidden rounded-full">
                                    <img src="https://i.postimg.cc/RhQYkKYk/pexels-italo-melo-2379005.jpg" alt=""
                                        className="object-cover object-top w-full h-32 " />
                                </div>
                                <div className="p-4 w-full flex flex-col justify-center">
                                    <div className="text-center">
                                        <h2 className="text-xl font-bold dark:text-gray-400">{adminDetails ? adminDetails.name : "Please Login Again"}</h2>
                                        <p className="mt-1 text-base text-gray-500 dark:text-gray-400">{adminDetails ? adminDetails.company : "Please Login Again"}</p>
                                        <p className="mt-1 text-base text-gray-500 dark:text-gray-400">{adminDetails ? adminDetails.email : "Please Login Again"}</p>
                                        <p className="mt-1 text-base text-gray-500 dark:text-gray-400">{adminDetails ? adminDetails.mobile : "Please Login Again"}</p>
                                        <p className="mt-1 text-base text-gray-500 dark:text-gray-400">{adminDetails ? adminDetails.role : "Please Login Again"}</p>
                                        <p className="mt-1 text-base text-gray-500 dark:text-gray-400">{adminDetails ? adminDetails.status ? "කාර්යාල දවසක්" : "නිවාඩු" : "Please Login Again"}</p>

                                    </div>
                                    <div className="mb-6 ml-10 mt-10">
                                        <label className="mr-2">
                                            <input type="radio" value="true" name="inline-radio" onChange={(event) => {
                                                setFormData({
                                                    ...adminDetails,
                                                    status: event.target.value,

                                                })

                                            }} />
                                            <span className="ml-2 dark:text-gray-400 text-green-600">කාර්යාල දවසක්</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="inline-radio" value="false" onChange={(event) => {
                                                setFormData({
                                                    ...adminDetails,
                                                    status: event.target.value,

                                                })

                                            }} />
                                            <span className="ml-2 dark:text-gray-400 text-red-600">නිවාඩු</span>
                                        </label>
                                    </div>
                                    <div className="flex justify-center px-2 mt-4">
                                        <button
                                            className="w-full px-4 py-2 text-center text-gray-100 bg-pink-800 rounded-full hover:bg-pink-700" onClick={() => {
                                                updateAdminDetails()

                                            }}
                                        >Update</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile