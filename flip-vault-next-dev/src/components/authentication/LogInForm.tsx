"use client";
import React, { useState } from "react";
import Input from "../custom-ui/Input";
import Icons from "../common/Icons";
import Cta from "../custom-ui/Cta";
import { useRouter } from "next/navigation";

type FormState = {
  username: string;
  password: string;
};
type ErrorsState = {
  [key: string]: string;
};
type PasswordVisibilityState = {
  [key: string]: boolean;
};

const Form: React.FC = () => {
  const DEFAULT_STATE = {
    username: "",
    password: "",
  };

  const [form, setForm] = useState<FormState>(DEFAULT_STATE);
  const [errors, setErrors] = useState<ErrorsState>({});
  const [passwordVisibility, setPasswordVisibility] =
    useState<PasswordVisibilityState>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const VALIDATE_FIELD = (name: string, value: string): string => {
    if (!value) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }
    return "";
  };

  const HANDLE_INPUT_CHANGE = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: VALIDATE_FIELD(name, value),
    }));
  };

  const RENDER_ERROR = (field: keyof FormState) => {
    return isSubmitted && errors[field] ? (
      <span className="text-red-500 text-xs pt-1 pl-1">{errors[field]}</span>
    ) : null;
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
      setForm(DEFAULT_STATE);
      localStorage.setItem("user_info", JSON.stringify(form));

      router.push("/");
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
      <div className="relative flex flex-col w-full pt-4">
        <label
          htmlFor="password"
          className="text-white pb-1 md:pb-2 text-sm leading-140">
          Password
        </label>
        <Input
          name="password"
          placeholder="Enter password..."
          type={passwordVisibility.password ? "text" : "password"}
          value={form.password}
          onChange={HANDLE_INPUT_CHANGE}
          border={`${
            isSubmitted && errors.password
              ? "!border-red-500 !bg-transparent"
              : "border-white/35"
          }`}
          rotateHover={`${
            isSubmitted && errors.password
              ? "after:!content-[unset] before:!content-[unset]"
              : ""
          }`}
        />
        <span
          onClick={() => TOGGLE_INPUT_TYPE("password")}
          className="absolute right-2 bottom-3 cursor-pointer text-white">
          <span
            className={`after:bg-white/35 after:w-5 after:scale-0 after:h-0.5 after:-rotate-45 relative after:absolute after:top-[9px] after:left-0 after:common-transition right-0.5 ${
              passwordVisibility.password ? "after:scale-100" : ""
            }`}>
            <Icons icon="openEye" />
          </span>
        </span>
      </div>
      {RENDER_ERROR("password")}
      <Cta className="mt-5 sm:mt-8 mb-4 font-bold md:font-extrabold md:text-base !py-3 !px-6 md:!px-8 text-sm w-full leading-140">
        Log In
      </Cta>
    </form>
  );
};

export default Form;
