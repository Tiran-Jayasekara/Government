"use client"
import React, { useContext, useState } from 'react'
import { GlobalContext } from '@/context';
import { useRouter } from 'next/navigation';

const Profile = () => {
    const { availability, setAvailability } = useContext(GlobalContext);
    const router = useRouter();

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
                                        <h2 className="text-xl font-bold dark:text-gray-400">Hari singh</h2>
                                        <p className="mt-1 text-base text-gray-500 dark:text-gray-400">Python Developer</p>
                                    </div>
                                    <div className="mb-6 ml-10 mt-10">
                                        <label className="mr-2">
                                            <input type="radio" name="inline-radio" onChange={(event) => { setAvailability(true) }} />
                                            <span className="ml-2 dark:text-gray-400 text-green-600">Available</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="inline-radio" value="option 2" onChange={(event) => { setAvailability(false) }} />
                                            <span className="ml-2 dark:text-gray-400 text-red-600">Not Available</span>
                                        </label>
                                    </div>
                                    <div className="flex justify-center px-2 mt-4">
                                        <button
                                            className="w-full px-4 py-2 text-center text-gray-100 bg-pink-800 rounded-full hover:bg-pink-700" onClick={() => router.push("/pages/government/pradeshiya_sabha")}>Update</button>
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