"use client"
import React, { useContext, useState } from 'react'
import { GlobalContext } from '@/context'
import { usePathname, useRouter } from "next/navigation";
import AlertMessage from '@/components/AlertMessage';
import AdminService from '@/service/adminService';
import Cookies from "js-cookie";


const Login = () => {


    const [formData, setFormData] = useState({ email: "", password: "" })
    const { Login } = AdminService();
    const { admin, setAdmin, adminDetails, setAdminDetails, setToken } = useContext(GlobalContext);
    const router = useRouter();


    const Navigate = async () => {
        const adminData = await Login(formData);
        if (adminData ? adminData.data.message == "Login Success" : null) {
            setAdminDetails(adminData?.data?.checkAdmin);
            Cookies.set("token", adminData?.data?.token);
            setToken(adminData?.data?.token);
            localStorage.setItem("admin", JSON.stringify(adminData?.data?.checkAdmin));


            if (adminData?.data?.checkAdmin?.company === "localCouncil" && adminData?.data?.checkAdmin?.role === "editor") {
                setAdmin("localCouncil_editor")
                router.push("/pages/government/pradeshiya_sabha")
            } else if (adminData?.data?.checkAdmin?.company === "localCouncil") {
                router.push("/Profile")
            }
        } else {
            alert(adminData ? adminData.data.message : null)
        }


    }



    return (
        <section className="w-full flex items-center justify-center h-screen font-poppins bg-gradient-to-r from-blue-200  to-green-200">
            <div className="flex-1">
                <div className="px-2 mx-auto ">
                    <div className="relative ">
                        <div className="relative px-4 py-4 bg-gray-100 shadow-md mx-2 rounded-xl md:mx-80 md:py-11 sm:px-8">
                            <div className="max-w-lg mx-auto text-center">
                                <a href="#" className="inline-block mb-4 text-blue-900  lg:mb-7 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"
                                        className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path
                                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg>
                                </a>
                                <h2 className="mb-4 text-2xl font-bold text-gray-700 lg:mb-7 md:text-5xl ">
                                    Login your account</h2>
                                <p className="text-gray-500 ">Your credentials here</p>
                                <div className="mt-4 lg:mt-7 ">
                                    <div className="">
                                        <input type="email"
                                            className="w-full px-4 py-3 mt-2 bg-white rounded-lg lg:py-5"
                                            name="" placeholder="Enter your email" onChange={(event) => {
                                                setFormData({
                                                    ...formData,
                                                    email: event.target.value,
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="mt-4 lg:mt-7">
                                        <div>
                                            <div className="relative flex items-center">
                                                <input type="password"
                                                    className="w-full px-4 py-3 bg-white rounded-lg lg:py-5  "
                                                    name="" placeholder="Enter password" onChange={(event) => {
                                                        setFormData({
                                                            ...formData,
                                                            password: event.target.value,
                                                        })
                                                    }} />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    className="absolute right-0 mr-3 " fill="currentColor"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                                    <path
                                                        d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                                    <path
                                                        d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between mt-4 lg:mt-7">
                                        <label className="flex dark:text-gray-300">
                                            <input type="checkbox" className="mt-1 mr-4" />
                                            <span className="text-sm ">Remember me</span>
                                        </label>
                                        <a href=" #"
                                            className="mt-2 text-sm font-semibold text-blue-500 lg:mt-0  hover:underline">
                                            forgot password? </a>
                                    </div>
                                    <button
                                        className="w-full py-3 text-lg font-bold text-gray-300 uppercase bg-blue-700 rounded-md lg:mt-7 mt-7  px-11 md:mt-7 hover:bg-blue-900 "
                                        onClick={() =>
                                            Navigate()
                                        }
                                    >LOGIN</button>
                                    <p className="mt-4 text-xs text-gray-700 lg:mt-7  lg:text-base">
                                        Need an account?
                                        <a href="#" onClick={() => { setAdmin('P') }} className="font-semibold text-blue-400 hover:text-blue-600">
                                            Create an account</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login