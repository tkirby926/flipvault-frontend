"use client";
import React, { useState } from "react";
import Input from "../custom-ui/Input";
import Icons from "../common/Icons";
import Cta from "../custom-ui/Cta";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";

type FormState = {
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  createPassword: string;
  confirmPassword: string;
};

type PasswordVisibilityState = {
  [key: string]: boolean;
};

type ErrorsState = {
  [key: string]: string;
};

const Form: React.FC = () => {
  const DEFAULT_STATE = {
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    createPassword: "",
    confirmPassword: "",
  };

  const [form, setForm] = useState<FormState>(DEFAULT_STATE);
  const [errors, setErrors] = useState<ErrorsState>({});
  const [passwordVisibility, setPasswordVisibility] =
    useState<PasswordVisibilityState>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const VALIDATE_FIELD = (name: string, value: string): string => {
    switch (name) {
      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) return "Email is required";
        if (!emailPattern.test(value)) return "Invalid email address";
        break;
      case "createPassword":
      case "confirmPassword":
        if (!value)
          return `${
            name === "createPassword" ? "Password" : "Confirm Password"
          } is required`;
        if (name === "confirmPassword" && value !== form.createPassword)
          return "Passwords do not match";
        break;
      default:
        if (!value)
          return `${name
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())} is required`;
    }
    return "";
  };

  const HANDLE_INPUT_CHANGE = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    const error = VALIDATE_FIELD(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const RENDER_ERROR = (field: keyof FormState) => {
    return isSubmitted && errors[field] ? (
      <span className="text-red-500 text-xs pt-1 pl-1">{errors[field]}</span>
    ) : null;
  };

  const HANDLE_PHONE_CHANGE = (value: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      phoneNumber: value,
    }));
    const error = VALIDATE_FIELD("phoneNumber", value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      phoneNumber: error,
    }));
  };

  const VALIDATE_FORM = (): ErrorsState => {
    const newErrors: ErrorsState = {};
    Object.keys(form).forEach((field) => {
      const error = VALIDATE_FIELD(field, form[field as keyof FormState]);
      if (error) newErrors[field] = error;
    });
    return newErrors;
  };

  const HANDLE_FORM_SUBMIT = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    const VALIDATE_ERR = VALIDATE_FORM();
    if (Object.keys(VALIDATE_ERR).length === 0) {
      // Save form data to local storage
      localStorage.setItem("user_info", JSON.stringify(form));

      setForm(DEFAULT_STATE);
      router.push("/sign-up/upload-profile");
    } else {
      setErrors(VALIDATE_ERR);
    }
  };

  const TOGGLE_INPUT_TYPE = (field: string): void => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <form onSubmit={HANDLE_FORM_SUBMIT}>
      <div className="flex gap-4 flex-col sm:flex-row">
        <div className="flex flex-col w-full">
          <label
            htmlFor="fullName"
            className="text-white mb-1 md:mb-2 text-sm leading-140">
            Display Name
          </label>
          <Input
            name="fullName"
            placeholder="John Doe"
            type="text"
            value={form.fullName}
            onChange={HANDLE_INPUT_CHANGE}
            border={`${
              isSubmitted && errors.fullName
                ? "!border-red-500 !bg-transparent"
                : "border-white/35"
            }`}
            rotateHover={`${
              isSubmitted && errors.fullName
                ? "after:!content-[unset] before:!content-[unset]"
                : ""
            }`}
          />
          {RENDER_ERROR("fullName")}
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="username"
            className="text-white mb-1 md:mb-2 text-sm leading-140">
            Username
          </label>
          <Input
            name="username"
            placeholder="john_doe_2024"
            type="text"
            value={form.username}
            onChange={HANDLE_INPUT_CHANGE}
            border={`${
              isSubmitted && errors.username
                ? "!border-red-500 !bg-transparent"
                : "border-white/35"
            }`}
            rotateHover={`${
              isSubmitted && errors.username
                ? "after:!content-[unset] before:!content-[unset]"
                : ""
            }`}
          />
          {RENDER_ERROR("username")}
        </div>
      </div>
      <div className="flex gap-4 py-4 flex-col sm:flex-row">
        <div className="flex flex-col w-full">
          <label
            htmlFor="email"
            className="text-white mb-1 md:mb-2 text-sm leading-140">
            Email Address
          </label>
          <Input
            name="email"
            placeholder="john_doe_2024"
            type="email"
            value={form.email}
            onChange={HANDLE_INPUT_CHANGE}
            border={`${
              isSubmitted && errors.email
                ? "!border-red-500 !bg-transparent"
                : "border-white/35"
            }`}
            rotateHover={`${
              isSubmitted && errors.email
                ? "after:!content-[unset] before:!content-[unset]"
                : ""
            }`}
          />
          {RENDER_ERROR("email")}
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="phoneNumber"
            className="text-white mb-1 md:mb-2 text-sm leading-140">
            Phone Number
          </label>
          <div
            className={`rotate_hover common-transition group relative ${
              isSubmitted && errors.phoneNumber
                ? "after:!content-[unset] before:!content-[unset]"
                : "p-[0.8px] pb-[0.79px]"
            }`}>
            <div
              className={`flex inner border group-hover:bg-light-gray rounded-2 ${
                isSubmitted && errors.phoneNumber
                  ? "border-red-500 !bg-transparent"
                  : "border-white/35 group-hover:border-transparent bg-opacity-0 group-hover:bg-opacity-100"
              }`}>
              <PhoneInput
                country={"us"}
                placeholder="+1"
                inputProps={{
                  name: "phone",
                  required: false,
                  autoFocus: false,
                  type: false,
                }}
                containerClass="!border-none !shadow-none !w-[67px] bg-white/15 m-0.5 rounded-1"
                inputClass="!w-[67px] bg-white/15 !h-full !p-2 !text-white !bg-transparent !border-none"
                buttonClass="!bg-transparent !border-none !text-white !w-full"
              />
              <Input
                value={form.phoneNumber}
                maxLength={10}
                onChange={(e) => HANDLE_PHONE_CHANGE(e.target.value)}
                placeholder="1234-567-890"
                type="number"
                className="border-none"
                rotateHover="after:!content-[unset] before:!content-[unset]"
                border="border-none !bg-transparent"
              />
            </div>
          </div>
          {RENDER_ERROR("phoneNumber")}
        </div>
      </div>
      <div className="flex gap-4 flex-col sm:flex-row">
        <div className="flex flex-col w-full relative">
          <div className="relative flex flex-col w-full">
            <label
              htmlFor="createPassword"
              className="text-white pb-1 md:pb-2 text-sm leading-140">
              Create password
            </label>
            <Input
              name="createPassword"
              placeholder="Enter password..."
              type={passwordVisibility.createPassword ? "text" : "password"}
              value={form.createPassword}
              onChange={HANDLE_INPUT_CHANGE}
              border={`${
                isSubmitted && errors.createPassword
                  ? "!border-red-500 !bg-transparent"
                  : "border-white/35"
              }`}
              rotateHover={`${
                isSubmitted && errors.createPassword
                  ? "after:!content-[unset] before:!content-[unset]"
                  : ""
              }`}
            />
            <span
              onClick={() => TOGGLE_INPUT_TYPE("createPassword")}
              className="absolute right-2 bottom-3 cursor-pointer text-white">
              <span
                className={`after:bg-white/35 after:w-5 after:scale-0 after:h-0.5 after:-rotate-45 relative after:absolute after:top-[9px] after:left-0 after:common-transition right-0.5 ${
                  passwordVisibility.createPassword ? "after:scale-100" : ""
                }`}>
                <Icons icon="openEye" />
              </span>
            </span>
          </div>

          {RENDER_ERROR("createPassword")}
        </div>
        <div className="flex flex-col w-full relative">
          <div className="relative flex flex-col w-full">
            <label
              htmlFor="confirmPassword"
              className="text-white pb-1 md:pb-2 text-sm leading-140">
              Confirm password
            </label>
            <Input
              name="confirmPassword"
              placeholder="Enter password..."
              type={passwordVisibility.confirmPassword ? "text" : "password"}
              value={form.confirmPassword}
              onChange={HANDLE_INPUT_CHANGE}
              border={`${
                isSubmitted && errors.confirmPassword
                  ? "!border-red-500 !bg-transparent"
                  : "border-white/35"
              }`}
              rotateHover={`${
                isSubmitted && errors.confirmPassword
                  ? "after:!content-[unset] before:!content-[unset]"
                  : ""
              }`}
            />
            <span
              onClick={() => TOGGLE_INPUT_TYPE("confirmPassword")}
              className="absolute right-2 bottom-3 cursor-pointer text-white">
              <span
                className={`after:bg-white/35 after:w-5 after:scale-0 after:h-0.5 after:-rotate-45 relative after:absolute after:top-[9px] after:left-0 after:common-transition right-0.5 ${
                  passwordVisibility.confirmPassword ? "after:scale-100" : ""
                }`}>
                <Icons icon="openEye" />
              </span>
            </span>
          </div>
          {RENDER_ERROR("confirmPassword")}
        </div>
      </div>

      <Cta className="mt-5 sm:mt-8 mb-4 font-bold md:font-extrabold md:text-base !py-3 !px-6 md:!px-[32px] text-sm w-full leading-140">
        Create Account
      </Cta>
    </form>
  );
};

export default Form;
