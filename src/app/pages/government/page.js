"use client";
import PageHeader from "@/components/pageHeader";
import React, { useEffect, useState } from "react";

import MainCarts from "@/components/MainCarts";
import CompanyService from "@/service/companyService";

const Government = () => {

  const { getAllCompany } = CompanyService();
  const [governmentData , setGovernmentData] = useState();

  useEffect(() => {
    getAllCompanies();
  },[])

  const getAllCompanies = async () => {
    console.log("getAllCompanies");
    const AllCompanyCardData = await getAllCompany();
    if (AllCompanyCardData) {
      setGovernmentData(AllCompanyCardData.data.constallCompanies)
    } else {
      console.log("No Data");
    }
  }

  return (
    <>
      <div className="flex flex-wrap md:mt-0 mt-6 w-full mx-auto justify-center items-center ">
        <PageHeader
          topic="රාජ්‍ය ආයතන"
          header="Well Come To Udududmbara"
          description="The Best Place to Check Availability of Government and Other Services."
        />
        <MainCarts governmentData={governmentData} />
      </div>
    </>
  );
};

export default Government;
