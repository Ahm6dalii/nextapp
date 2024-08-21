"use client";
import React from "react";
// import ReactLoading from "react-loading";
import {Bars } from 'react-loader-spinner'

const loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[86vh]">
       <Bars
  height="80"
  width="80"
  color="gray"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    </div>
  );
};

export default loading;
