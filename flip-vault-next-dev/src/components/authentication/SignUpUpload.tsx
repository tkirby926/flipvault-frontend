"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";
import Icons from "../common/Icons";
import Cta from "../custom-ui/Cta";
import Input from "../custom-ui/Input";

type FileData = {
  selectedFile: File | null;
  previewUrl: string | null;
};

const SignUpUpload: React.FC = () => {
  const [fileData, setFileData] = useState<FileData>({
    selectedFile: null,
    previewUrl: null,
  });

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("user_info");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }

    const storedImageData = localStorage.getItem("profile_image");
    if (storedImageData) {
      setFileData({
        selectedFile: null,
        previewUrl: storedImageData,
      });
    }
  }, []);

  const HANDLE_FILE_CHANGE = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 25 * 1024 * 1024) {
        alert("File size exceeds 25MB limit.");
        return;
      }

      if (!["image/png", "image/jpeg", "image/gif"].includes(file.type)) {
        alert("Only PNG, JPEG, and GIF files are allowed.");
        return;
      }

      const blobUrl = URL.createObjectURL(file);

      setFileData({
        selectedFile: file,
        previewUrl: blobUrl,
      });

      e.target.value = "";
    }
  };

  const HANDLE_REMOVE_IMAGE = () => {
    setFileData({
      selectedFile: null,
      previewUrl: null,
    });
    localStorage.removeItem("profile_image");
  };

  const HANDLE_CONFIRM = () => {
    if (fileData.previewUrl) {
      localStorage.setItem("profile_image", fileData.previewUrl);
      alert("Profile image saved successfully!");
    }
  };

  return (
    <div className="h-screen w-full bg-signUpBg bg-no-repeat bg-center bg-cover flex items-center justify-center flex-col relative">
      <div className="container py-16 overflow-y-scroll">
        <div className="border border-black bg-white/15 w-full max-w-[560px] max-h-[543px] mx-auto rounded-2.5 md:rounded-5 p-6 lg:p-8 backdrop-filter backdrop-blur-md">
          <div className="pb-5 md:pb-6 lg:pb-8">
            <Image
              className="w-[115px] h-[30px] mx-auto pointer-events-none"
              src="/assets/images/homepage/png/nav-logo.png"
              height={30}
              width={114}
              alt="nav-logo"
              sizes="100vw"
            />
          </div>
          <div className="pb-5 md:pb-6 lg:pb-8">
            <PrimaryHeading
              maxFontSize={24}
              minFontSize={20}
              reduceBelow={1200}
              className="text-center leading-130">
              Almost done!
            </PrimaryHeading>
            <Paragraph
              maxFontSize={12}
              minFontSize={14}
              className="opacity-80 leading-140 pt-1 md:pt-2 text-center">
              Upload your profile picture
            </Paragraph>
          </div>
          <label
            htmlFor="photo"
            className="p-8 border cursor-pointer border-white/35 common-transition hover:border-blue rounded-2.5 md:rounded-3.5 flex items-center justify-center flex-col">
            <Icons icon="uploadIcon" />
            <Paragraph
              center
              maxFontSize={12}
              minFontSize={14}
              className="leading-140 pt-3 md:pt-4">
              Drag and drop or click to upload
            </Paragraph>
            <Paragraph
              center
              maxFontSize={14}
              minFontSize={16}
              className="opacity-50 leading-140 pt-1">
              JPG, PNG, GIF up to 25 MB
            </Paragraph>
          </label>
          <Input
            type="file"
            id="photo"
            hidden
            accept=".png, .jpg, .jpeg, .gif"
            onChange={HANDLE_FILE_CHANGE}
          />
          {fileData.previewUrl && (
            <div className="text-center mt-3 backdrop-filter backdrop-blur-md border-white/10 border rounded-2.5 md:rounded-3.5 overflow-hidden flex items-center gap-4 justify-between pe-3 md:pe-4">
              <div className="flex items-center gap-4">
                <Image
                  src={fileData.previewUrl}
                  alt="Preview"
                  width={78}
                  height={72}
                  className="w-[58px] h-[52px] md:w-[78px] md:h-[72px] object-cover"
                />
                {fileData.selectedFile && (
                  <div>
                    <Paragraph className="text-white leading-140 !text-xs sm:w-auto w-[120px] truncate">{`${fileData.selectedFile?.name}`}</Paragraph>
                    <Paragraph className="text-white/70 !text-xs mt-0.5 sm:mt-1">{`${(
                      fileData.selectedFile?.size /
                      (1024 * 1024)
                    ).toFixed(2)} MB`}</Paragraph>
                  </div>
                )}
              </div>
              <span
                className="cursor-pointer p-1 md:p-2 border-white/30 border rounded-2"
                onClick={HANDLE_REMOVE_IMAGE}>
                <Icons icon="crossIcon" />
              </span>
            </div>
          )}
          <div
            className={`mt-5 md:mt-6 lg:mt-8 ${
              !fileData.previewUrl && "cursor-not-allowed"
            }`}>
            <Cta
              url="/"
              target="_self"
              onClick={HANDLE_CONFIRM}
              className={`font-bold md:font-extrabold md:text-base text-center !py-3 !px-6 md:!px-8 text-sm w-full leading-140 ${
                fileData.previewUrl
                  ? ""
                  : "opacity-30 !cursor-not-allowed pointer-events-none"
              }`}>
              Confirm
            </Cta>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpUpload;
