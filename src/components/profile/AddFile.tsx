"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Icons from "../common/Icons";
import Cta from "../custom-ui/Cta";
import { ADD_FILE_DATA, GET_FILE_LOGO } from "@/src/utils/helper";
import Image from "next/image";

const AddFile = () => {
  const [searchValue, setSearchValue] = useState("");
  const [files, setFiles] = useState(ADD_FILE_DATA);
  const [fileAddSuccess, setFileAddSuccess] = useState(false);

  const SEARCH_HANDLER = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const FILE_CHANGE_HANDLER = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files).map((file) => ({
        name: file.name,
        size: file.size.toString(), // Convert size to string
        type: file.type,
        icon: GET_FILE_LOGO(file.name),
      }));
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      setFileAddSuccess(true);
      setTimeout(() => {
        setFileAddSuccess(false);
      }, 3000);
    }
  };

  const FILTERED_DATA = files.filter((file) =>
    file.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="container mx-auto mx-auto custom-2xl:max-w-[1600px] relative pb-10">
      <div className="pt-6 relative -z-0">
        <div className="flex sm:flex-row flex-col sm:gap-0 gap-4 justify-between items-center mb-6">
          <PrimaryHeading maxFontSize={22} minFontSize={16} reduceBelow={1200}>
            My Files
          </PrimaryHeading>
          <div className="flex">
            <div className="flex px-3 items-center border border-charcoal-gray relative z-10 h-[44px] rounded-2 bg-transparent w-[220px]">
              <Icons className="me-2.5" icon="search" />
              <input
                placeholder="Search..."
                className="text-white ps-[10px] w-full placeholder:opacity-40 rounded-2 bg-transparent outline-none border-0"
                type="search"
                value={searchValue}
                onChange={SEARCH_HANDLER}
              />
            </div>
            <div className="flex px-3 ms-3 items-center border relative after:absolute after:top-0 after:left-0 after:right-0 after:h-full after:common-transition after:z-0 after:bg-blueGradient after:translate-y-[110%] hover:after:translate-y-0 overflow-hidden cursor-pointer border-charcoal-gray z-10 h-[44px] rounded-2 bg-transparent w-[100px]">
              <div className="relative z-10 flex items-center">
                <Icons icon="filter" />
                <p className="ms-2.5 font-normal text-white text-base">
                  Filters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 sm:overflow-hidden overflow-auto sm:mb-0 pb-2">
        <div
          className={`flex flex-col items-center justify-center bg-white bg-opacity-[12%] p-4 rounded-5 sm:min-w-[252px] sm:min-h-[140px] min-w-[221px] border border-black sm:mb-2 ${fileAddSuccess && "pointer-events-none"
            }`}>
          <label htmlFor="add_file" className="cursor-pointer">
            <Icons icon="bluePlusIcon" />
          </label>
          <input
            accept=".ppt,.pptx,.zip,.rar,.xls,.xlsx,.pdf,.docx"
            hidden
            id="add_file"
            type="file"
            multiple
            onChange={FILE_CHANGE_HANDLER}
          />
          <Cta
            label
            labelId="add_file"
            className="my-3 w-full md:!py-[14.5] !py-2 !pt-3">
            {fileAddSuccess ? "File Added" : "  Add Files"}
          </Cta>
          <p className="font-normal text-xs text-white opacity-[72%]">
            Click to add files from your device.
          </p>
        </div>
        <div className="sm:overflow-auto flex flex-row-reverse gap-3 sm:pb-2">
          {FILTERED_DATA.map((obj, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center bg-white bg-opacity-[12%] p-4 rounded-5 sm:min-w-[252px] min-w-[221px] border border-black sm:min-h-[140px] relative overflow-hidden">
              <div className="bg-blueGradient h-[86px] w-[86px] blur-[45px] rounded-full absolute -top-4 -start-4 z-0"></div>
              <span className="relative z-10">
                {obj.icon.includes("/") ? (
                  <Image
                    width={40}
                    height={40}
                    className="object-cover size-10"
                    src={obj.icon}
                    alt="icon"
                  />
                ) : (
                  <Icons icon={obj.icon} />
                )}
              </span>
              <p className="mt-3 w-full font-normal md:text-xl text-lg text-white relative z-10">
                {obj.name}
              </p>
              <p className="font-normal text-xs text-white opacity-[32%] relative z-10">
                {obj.size} bytes
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddFile;
