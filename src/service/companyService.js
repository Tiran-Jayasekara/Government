import { GlobalContext } from '@/context';
import axios from 'axios';
import React, { useContext } from 'react'

const CompanyService = () => {

    const { token } = useContext(GlobalContext);

    const http = axios.create({
        baseURL: "http://192.168.1.185:3001",
        // process.env.REACT_APP_BASE_URL,

        headers: {
            "Content-type": "application/json",
            "x-auth-token": token,
        },
    });

    const getAllCompany = async () => {
        try {
            const company = await http.get("/company/getAllCompany");
            if (company) {
                return company;
            } else {
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getCompanyData = async (company) => {
        try {
            const companyData = await http.get("/company/getCompanyData/" + company);
            if (companyData) {
                return companyData;
            } else {
            }
        } catch (error) {
            console.log(error);
        }
    }


    const UpdateCompanyStatus = async (StatusForm) => {
        try {
            const updateCompanyStatus = await http.put("/company/UpdateCompanyStatus", StatusForm);
            if (updateCompanyStatus) {
                return updateCompanyStatus;
            } else {

            }
        } catch (error) {
            console.log(error);
        }
    }


    return {
        getAllCompany,
        getCompanyData,
        UpdateCompanyStatus
    }
}

export default CompanyService