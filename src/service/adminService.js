
import { GlobalContext } from "@/context";
import axios from "axios";
import { useContext } from "react";

const AdminService = () => {

    const { token } = useContext(GlobalContext)

    const http = axios.create({
        baseURL: "http://192.168.1.185:3001",
        // process.env.REACT_APP_BASE_URL,

        headers: {
            "Content-type": "application/json",
            "x-auth-token": token,
        },
    });

    const Login = async (formData) => {
        try {
            const admin = await http.post("/admin/loginAdmin", formData);
            if (admin) {
                return admin;
            } else {
            }
        } catch (error) {

        }
    }

    const getAdmin = async (company) => {

        try {
            const admin = await http.get("/admin/getAdmin/" + company);
            if (admin) {
                return admin;
            } else {
            }
        } catch (error) {

        }
    }


    const UpdateAdmin = async (adminStatusFormData) => {
        try {
            const admin = await http.put("/admin/updateAdmin", adminStatusFormData);
            if (admin) {
                return admin;
            } else {

            }
        } catch (error) {

        }
    }

    const UpdateAdminStatus = async (adminStatusForm) => {
        try {
            const admin = await http.put("/admin/updateAdminStatus", adminStatusForm);
            if (admin) {
                return admin;
            } else {

            }
        } catch (error) {

        }
    }






    return {
        Login,
        UpdateAdmin,
        getAdmin,
        UpdateAdminStatus
    }
}

export default AdminService