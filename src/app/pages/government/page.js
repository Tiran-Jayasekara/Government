"use client";
import PageHeader from "@/components/pageHeader";
import React, { useState } from "react";

import { governmentData } from "../../../components/utils"
import MainCarts from "@/components/MainCarts";

const Government = () => {

  return (
    <>
      <div className="flex flex-wrap md:mt-0 mt-6 w-full mx-auto justify-center items-center ">
        <PageHeader
          topic="රාජ්‍ය ආයතන"
          header="Well Come To Udududmbara"
          description="The Best Place to Check Availability of Government and Other Services."
        />
        <MainCarts governmentData={governmentData}/>
      </div>
    </>
  );
};

export default Government;
